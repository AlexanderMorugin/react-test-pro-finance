import type { FC } from 'react';
import { Field, Form, Formik } from 'formik';

import { CustomButton } from '../..';

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
      // validationSchema={validationSchema}
      validateOnBlur={true}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.filterForm}>
          <div className={styles.filterForm__fields}>
            <label htmlFor='barcode' className={styles.filterForm__label}>
              Баркод
              <Field
                className={styles.filterForm__field}
                // as={Input}
                label='Баркод'
                name='barcode'
                id='barcode'
                placeholder='5643242134323099'
                required
              />
              {/* <ErrorMessage name="barcode" component="div" className={styles.filterForm__error} /> */}
            </label>
            <label htmlFor='articleNumber' className={styles.filterForm__label}>
              Артикул
              <Field
                className={styles.filterForm__field}
                // as={Input}
                label='Артикул'
                name='articleNumber'
                id='articleNumber'
                placeholder='ДжЖСинМом0823'
                required
              />
              {/* <ErrorMessage name="articleNumber" component="div" className={styles.filterForm__error} /> */}
            </label>
            <label htmlFor='size' className={styles.filterForm__label}>
              Размер
              <Field
                className={`${styles.filterForm__field} ${styles.filterForm__field_size}`}
                // as={Input}
                label='Размер'
                name='size'
                id='size'
                placeholder='44'
                required
              />
              {/* <ErrorMessage name="size" component="div" className={styles.filterForm__error} /> */}
            </label>
          </div>

          {/* <div className={styles.filterForm__buttons}>
            <CustomButton
              className={styles.filterForm__buttonSubmit}
              type='submit'
              title='Сформировать'
              onClick={() => {}}
              disabled={isSubmitting}
            />
            <CustomButton
              className={styles.filterForm__buttonUpload}
              type='submit'
              title='Экспорт'
              upload={true}
              onClick={() => {}}
            />
          </div> */}
        </Form>
      )}
    </Formik>
  );
};

export default FilterForm;
