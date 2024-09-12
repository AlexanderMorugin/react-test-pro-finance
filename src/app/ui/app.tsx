import type { FC } from 'react';

import { MainBlock, SidebarBlock } from '../../widgets';

import styles from './app.module.scss';

const App: FC = () => {
  return (
    <div className={styles.app}>
      <SidebarBlock />
      <MainBlock />
    </div>
  );
};

export default App;
