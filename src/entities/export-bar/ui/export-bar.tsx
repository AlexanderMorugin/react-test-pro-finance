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
