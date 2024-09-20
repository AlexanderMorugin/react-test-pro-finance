import type { FC } from 'react';

import { CustomButton } from '../..';

import styles from './export-bar.module.scss';

interface IExportBar {
  disabled: () => boolean;
  handleExportData: () => void;
}

const ExportBar: FC<IExportBar> = ({ disabled, handleExportData }) => {
  return (
    <div className={styles.exportBar}>
      <CustomButton
        className={
          disabled()
            ? styles.exportBar__disabled
            : styles.exportBar__buttonSubmit
        }
        type='submit'
        title='Сформировать'
      />
      <CustomButton
        className={styles.exportBar__buttonExport}
        title='Экспорт'
        upload={true}
        onClick={handleExportData}
      />
    </div>
  );
};

export default ExportBar;
