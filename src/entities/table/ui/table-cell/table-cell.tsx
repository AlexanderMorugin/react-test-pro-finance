import { ChangeEvent, useEffect, useState } from 'react';

type Option = {
  label: string;
  value: string;
};

const TableCell = ({ getValue, row, column, table }) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  const handleDoubleClick = () => {
    setEditing(true);
  };
  // const columnMeta = column.columnDef.meta;
  // const tableMeta = table.options.meta;

  // const [value, setValue] = useState("");

  return editing ? (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      type={column.columnDef.meta?.type || 'text'}
    />
  ) : (
    <span onDoubleClick={handleDoubleClick}>{value}</span>
  );

  // const onBlur = () => {
  //   tableMeta?.updateData(row.index, column.id, value);
  // };
  // const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   setValue(e.target.value);
  //   tableMeta?.updateData(row.index, column.id, e.target.value);
  // };

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  // return columnMeta?.type === 'select' ? (
  //   <select onChange={onSelectChange} value={initialValue}>
  //     {columnMeta?.options?.map((option: Option) => (
  //       <option key={option.value} value={option.value}>
  //         {option.label}
  //       </option>
  //     ))}
  //   </select>
  // ) : // <input
  //   value={value}
  //   onChange={(e) => setValue(e.target.value)}
  //   onBlur={onBlur}
  //   type={columnMeta?.type || 'text'}
  // />
  // editing ? (
  //   <input
  //     className={styles.input}
  //     type={columnMeta?.type || 'number'}
  //     value={value}
  //     onChange={handleChange}
  //     onBlur={() => setEditing(false)}
  //     required={columnMeta?.required}
  //     pattern={columnMeta?.pattern}
  //   />
  // ) : (
  //   <span onDoubleClick={handleDoubleClick}>{value}</span>
  // );
};

export default TableCell;
