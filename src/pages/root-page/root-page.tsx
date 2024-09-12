import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './root-page.module.scss';

const RootPage: FC = () => {
  return (
    <main className={styles.rootPage}>
      <Outlet />
    </main>
  );
};

export default RootPage;
