import { useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  // getPaginationRowModel,
  getSortedRowModel,
  Row,
  useReactTable,
} from '@tanstack/react-table';
import { mkConfig, generateCsv, download } from 'export-to-csv';
import { FaCaretDown } from 'react-icons/fa';

import mockData from '../../../../mock-data/DATA.json';
import TableCell from '../table-cell/table-cell';

import styles from './table.module.scss';
import { ExportBar, TotalBar, UploadBar } from '../../..';
import useTotal from '../../../../shared/hooks/use-total';

export type Product = {
  id: number;
  barcode: number;
  product_brand: string;
  product_name: string;
  product_quantity: number;
  price: number;
};

// const countSum = '0'

const columnHelper = createColumnHelper<Product>();

const columns = [
  columnHelper.accessor('barcode', {
    cell: TableCell,
    header: 'Баркод',
    // footer: 'Итого',
    meta: {
      type: 'number',
      required: true,
    },
  }),
  columnHelper.accessor('product_brand', {
    cell: TableCell,
    header: 'Бренд',
    // footer: '',
    meta: {
      type: 'text',
      required: true,
    },
  }),
  columnHelper.accessor('product_name', {
    cell: TableCell,
    header: 'Наименование',
    // footer: '',
    meta: {
      type: 'text',
      required: true,
    },
  }),
  columnHelper.accessor('product_quantity', {
    cell: TableCell,
    header: 'Количество',
    // footer: countSum,
    meta: {
      type: 'number',
      required: true,
    },
  }),
  columnHelper.accessor('price', {
    cell: TableCell,
    header: 'Цена',
    // footer: '',
    meta: {
      type: 'number',
      required: true,
    },
  }),
];

const Table = () => {
  const [data, setData] = useState<Product[]>([]);
  const [showTable, setShowTable] = useState<boolean>(false);

  // const [sorting, setSorting] = useState([]);
  // const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    columns,
    data,
    // state: {
    //   sorting,
    //   globalFilter,
    // },

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

    // onSortingChange: setSorting,
    // getSortedRowModel: getSortedRowModel(),

    // onGlobalFilterChange: setGlobalFilter,
    // getFilteredRowModel: getFilteredRowModel(),

    // getCoreRowModel: getCoreRowModel(),
    // getFilteredRowModel: getFilteredRowModel(),
  });

  const handleDowloadData = () => {
    setData(() => [...mockData]);
    setShowTable(true);
  };

  const handleExportData = () => {
    exportExcel(table.getFilteredRowModel().rows);
  };

  const handleResetData = () => {
    setData([]);
    setShowTable(false);
  };

  const csvConfig = mkConfig({
    fieldSeparator: ',',
    filename: 'Export_Data_Csv', // export file name (without .csv)
    decimalSeparator: '.',
    useKeysAsHeaders: true,
  });

  // export function
  const exportExcel = (rows: Row<Product>[]) => {
    const rowData = rows.map((row) => row.original);
    const csv = generateCsv(csvConfig)(rowData);
    download(csvConfig)(csv);
  };

  const { totalQuantity, totalPrice } = useTotal(data);
  // const totalQuantity = data.reduce((acc, n) => acc + Number(n.product_quantity), 0);

  return (
    <div className={styles.table}>
      {/* <div>
        <input
          value={globalFilter ?? ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder='Search...'
        />
      </div> */}

      <ExportBar handleExportData={handleExportData} />
      <UploadBar
        handleDowloadData={handleDowloadData}
        handleResetData={handleResetData}
      />

      {showTable && (
        <div className={styles.table__container}>
          <table>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      <button className={styles.table__theadTh}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        <FaCaretDown className={styles.table__arrow} />
                      </button>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className={styles.table__tbodyTr}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className={styles.table__tbodyTd}>
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
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((footer) => (
                    <th key={footer.id}>
                      <div className={styles.table__theadTh}>
                        {flexRender(
                          footer.column.columnDef.footer,
                          footer.getContext()
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot>
          </table>

          <TotalBar totalQuantity={totalQuantity} totalPrice={totalPrice}/>

          {/* <div className={styles.table__tot}>{countSum}</div> */}
        </div>
      )}
    </div>
  );
};

export default Table;
