import type { FC } from 'react';

import { CustomButton } from '../..';

import styles from './upload-bar.module.scss';

interface IUploadBar {
  handleDowloadData: () => void;
  handleResetData: () => void;
}

const UploadBar: FC<IUploadBar> = ({ handleDowloadData, handleResetData }) => {
  return (
    <section className={styles.uploadBar}>
      <div className={styles.uploadBar__buttons}>
        <CustomButton
          className={styles.uploadBar__button}
          title='Загрузить данные из csv'
          importing={true}
          onClick={handleDowloadData}
        />
        <CustomButton
          className={styles.uploadBar__button}
          title='Изменить данные'
          change={true}
          onClick={() => {}}
        />
      </div>
      <CustomButton
        className={`${styles.uploadBar__button} ${styles.uploadBar__button_reset}`}
        title='Очистить'
        reset={true}
        onClick={handleResetData}
      />
    </section>
  );
};

export default UploadBar;
