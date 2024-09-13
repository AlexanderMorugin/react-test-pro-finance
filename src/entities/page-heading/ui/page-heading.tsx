import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Routes from '../../../shared/config/routes/routes';
import { CustomButton } from '../..';

import styles from './page-heading.module.scss';

const PageHeading: FC = () => {
  const navigate = useNavigate();

  const handleRouting = () => {
    navigate(Routes.INSTRUCTIONS);
  };
  return (
    <div className={styles.pageHeading}>
      <h1 className={styles.pageHeading__title}>
        Остатки сформированы на 01.04.2023 г.
      </h1>
      <CustomButton
        className={styles.pageHeading__button}
        title='Инструкции'
        onClick={handleRouting}
        instructions={true}
      />
    </div>
  );
};

export default PageHeading;
