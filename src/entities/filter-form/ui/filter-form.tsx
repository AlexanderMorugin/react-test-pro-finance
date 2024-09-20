import { useState, type FC } from 'react';

import { ExportBar } from '../..';

import styles from './filter-form.module.scss';
import { Product } from '../../table/ui/table/table';

interface IFilterForm {
  data: Product[];
  setData: any;
  handleExportData: () => void;
}

const FilterForm: FC<IFilterForm> = ({ data, setData, handleExportData }) => {
  const [barcode, setBarcode] = useState('');
  const [brand, setBrand] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    setData(
      data
        .filter((item) => item.barcode.toString().includes(barcode.trim()))
        .filter((item) =>
          item.product_brand.toLowerCase().includes(brand.trim().toLowerCase())
        )
        .filter((item) =>
          item.product_name.toLowerCase().includes(name.trim().toLowerCase())
        )
        .filter((item) => item.price.toString().includes(price.trim()))
    );
    setBarcode('')
    setBrand('')
    setName('')
    setPrice('')
  };

  const names = barcode || brand || name || price;

  const disabled = () => {
    if (names === '') {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <form className={styles.filterForm} onClick={handleSubmit}>
        <div className={styles.filterForm__fields}>
          <label htmlFor='barcode' className={styles.filterForm__label}>
            Баркод
            <input
              className={styles.filterForm__field}
              type='text'
              name={barcode}
              id='barcode'
              placeholder='0123456789'
              value={barcode}
              onChange={(e) => setBarcode(e.target.value)}
            />
          </label>
          <label htmlFor='brand' className={styles.filterForm__label}>
            Бренд
            <input
              className={styles.filterForm__field}
              type='text'
              name={brand}
              id='brand'
              placeholder='ДжЖСинМом'
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </label>
          <label htmlFor='name' className={styles.filterForm__label}>
            Наименование
            <input
              className={styles.filterForm__field}
              type='text'
              name='name'
              id='name'
              placeholder='ДжЖСинМом0823'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor='price' className={styles.filterForm__label}>
            Цена
            <input
              className={styles.filterForm__field}
              type='text'
              name='price'
              id='price'
              placeholder='01823'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
        </div>
        <ExportBar disabled={disabled} handleExportData={handleExportData} />
      </form>
    </>
  );
};

export default FilterForm;
