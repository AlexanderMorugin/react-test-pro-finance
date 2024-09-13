import type { FC } from 'react';

import { ProfileBar } from '../../../entities';

import styles from './main-block.module.scss';

const MainBlock: FC = () => {
  return (
    <main className={styles.mainBlock}>
      <ProfileBar />
    </main>
  );
};

export default MainBlock;
