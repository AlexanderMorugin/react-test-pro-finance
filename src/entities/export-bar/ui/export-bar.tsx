import type { FC } from 'react';

import { CustomButton } from '../..';

import styles from './export-bar.module.scss';

interface IExportBar {
  handleExportData: () => void;
}

const ExportBar: FC<IExportBar> = ({ handleExportData }) => {
  return (
    <div className={styles.exportBar}>
      <CustomButton
        className={styles.exportBar__buttonSubmit}
        type='submit'
        title='Сформировать'
        onClick={() => {}}
        // disabled={isSubmitting}
      />
      <CustomButton
        className={styles.exportBar__buttonExport}
        // type='submit'
        title='Экспорт'
        upload={true}
        onClick={handleExportData}
      />
    </div>
  );
};

export default ExportBar;
