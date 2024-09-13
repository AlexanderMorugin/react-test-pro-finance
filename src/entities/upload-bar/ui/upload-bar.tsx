import type { FC } from 'react';

import { CustomButton } from '../..';

import styles from './upload-bar.module.scss';

const UploadBar: FC = () => {
  return (
    <section className={styles.uploadBar}>
      <div className={styles.uploadBar__buttons}>
        <CustomButton
          className={styles.uploadBar__button}
          title='Загрузить данные из csv'
          importing={true}
          onClick={() => {}}
        />
        <CustomButton
          className={styles.uploadBar__button}
          title='Изменить данные'
          change={true}
          onClick={() => {}}
        />
      </div>
    </section>
  );
};

export default UploadBar;
