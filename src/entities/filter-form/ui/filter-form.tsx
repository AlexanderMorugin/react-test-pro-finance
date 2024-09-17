import type { FC } from 'react';
import { Field, Form, Formik } from 'formik';

import styles from './filter-form.module.scss';

interface IFilterForm {
  barcode: string;
  articleNumber: string;
  size: string;
}

const initialValues: IFilterForm = {
  barcode: '',
  articleNumber: '',
  size: '',
};

const FilterForm: FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur={true}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        resetForm();
      }}
    >
      {() => (
        <Form className={styles.filterForm}>
          <div className={styles.filterForm__fields}>
            <label htmlFor='barcode' className={styles.filterForm__label}>
              Баркод
              <Field
                className={styles.filterForm__field}
                label='Баркод'
                name='barcode'
                id='barcode'
                placeholder='5643242134323099'
                required
              />
            </label>
            <label htmlFor='articleNumber' className={styles.filterForm__label}>
              Артикул
              <Field
                className={styles.filterForm__field}
                label='Артикул'
                name='articleNumber'
                id='articleNumber'
                placeholder='ДжЖСинМом0823'
                required
              />
            </label>
            <label htmlFor='size' className={styles.filterForm__label}>
              Размер
              <Field
                className={`${styles.filterForm__field} ${styles.filterForm__field_size}`}
                label='Размер'
                name='size'
                id='size'
                placeholder='44'
                required
              />
            </label>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FilterForm;
