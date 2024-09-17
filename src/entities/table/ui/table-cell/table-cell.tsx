import { useEffect, useState } from 'react';

import styles from './table-cell.module.scss';

// type Option = {
//   label: string;
//   value: string;
// };

const TableCell = ({ getValue, row, column, table }) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  // edition
  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  const handleDoubleClick = () => {
    setEditing(true);
  };

  // validation
  const columnMeta = column.columnDef.meta;

  return editing ? (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      type={column.columnDef.meta?.type || 'text'}
      required={columnMeta?.required}
      pattern={columnMeta?.pattern}
      className={styles.tableCell}
    />
  ) : (
    <span onDoubleClick={handleDoubleClick}>{value}</span>
  );
};

export default TableCell;
