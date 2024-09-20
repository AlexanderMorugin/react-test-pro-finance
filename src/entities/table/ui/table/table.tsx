import { useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { mkConfig, generateCsv, download } from 'export-to-csv';
import { FaCaretDown } from 'react-icons/fa';

import mockData from '../../../../mock-data/DATA.json';
import TableCell from '../table-cell/table-cell';
import { FilterForm, UploadBar } from '../../..';
import useTotal from '../../../../shared/hooks/use-total';

import styles from './table.module.scss';

export type Product = {
  id: number;
  barcode: number;
  product_brand: string;
  product_name: string;
  product_quantity: number;
  price: number;
};

const columnHelper = createColumnHelper<Product>();

const columns = [
  columnHelper.accessor('barcode', {
    cell: TableCell,
    header: 'Баркод',
    meta: {
      type: 'text',
      required: true,
      pattern: '^[0-9]+$',
    },
  }),
  columnHelper.accessor('product_brand', {
    cell: TableCell,
    header: 'Бренд',
    meta: {
      type: 'text',
      required: true,
    },
  }),
  columnHelper.accessor('product_name', {
    cell: TableCell,
    header: 'Наименование',
    size: 300,
    meta: {
      type: 'text',
      required: true,
    },
  }),
  columnHelper.accessor('product_quantity', {
    cell: TableCell,
    header: 'Количество',
    meta: {
      type: 'text',
      required: true,
      pattern: '^[0-9]+$',
    },
  }),
  columnHelper.accessor('price', {
    cell: TableCell,
    header: 'Цена',
    meta: {
      type: 'text',
      required: true,
      pattern: '^[0-9]+$',
    },
  }),
];

const Table = () => {
  const [data, setData] = useState<Product[]>([]);
  const [showTable, setShowTable] = useState<boolean>(false);
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    columns,
    data,
    state: {
      sorting,
    },

    meta: {
      updateData: (rowIndex: number, columnId: string, value: string) =>
        setData((prev) =>
          prev.map((row, index) => {
            if (index === rowIndex)
              return {
                ...prev[rowIndex],
                [columnId]: value,
              };
            return row;
          })
        ),
    },
    getCoreRowModel: getCoreRowModel(),

    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });

  const handleDowloadData = () => {
    setData(() => [...mockData]);
    setShowTable(true);
  };

  const handleResetData = () => {
    setData(() => [...mockData]);
  };

  // exporting to csv file
  const csvConfig = mkConfig({
    fieldSeparator: ',',
    filename: 'Export_Data_Csv',
    decimalSeparator: '.',
    useKeysAsHeaders: true,
  });

  const exportExcel = (rows: Row<Product>[]) => {
    const rowData = rows.map((row) => row.original);
    const csv = generateCsv(csvConfig)(rowData);
    download(csvConfig)(csv);
  };

  const handleExportData = () => {
    exportExcel(table.getFilteredRowModel().rows);
  };

  const { totalQuantity, totalPrice } = useTotal(data);

  return (
    <>
      <FilterForm
        data={data}
        setData={setData}
        handleExportData={handleExportData}
      />

      <UploadBar
        handleDowloadData={handleDowloadData}
        handleResetData={handleResetData}
      />

      {showTable && (
        <div className={styles.table}>
          <div className={styles.table__scroll}>
            <table width={table.getTotalSize()}>
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <td key={header.id} width={header.getSize()}>
                        <button
                          {...{
                            className: header.column.getCanSort()
                              ? styles.table__button
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          <FaCaretDown className={styles.table__arrow} />
                        </button>
                      </td>
                    ))}
                  </tr>
                ))}
              </thead>

              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className={styles.table__tbodyTr}>
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        width={cell.column.getSize()}
                        className={styles.table__tbodyTd}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr className={styles.table__tfoot}>
                  <td colSpan={3} className={styles.table__tfootTd}>
                    Итого:
                  </td>
                  <td className={styles.table__tfootTd}>{totalQuantity}</td>
                  <td className={styles.table__tfootTd}>{totalPrice}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
