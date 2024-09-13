import type { FC } from 'react';

import { PageHeading, ProfileBar } from '../../../entities';

import styles from './main-block.module.scss';

const MainBlock: FC = () => {
  return (
    <main className={styles.mainBlock}>
      <ProfileBar />
      <PageHeading />
    </main>
  );
};

export default MainBlock;
