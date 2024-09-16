import type { FC } from 'react';

import { FilterForm, PageHeading, ProfileBar, Table } from '../../../entities';

import styles from './main-block.module.scss';

const MainBlock: FC = () => {
  return (
    <main className={styles.mainBlock}>
      <ProfileBar />
      <PageHeading />
      <FilterForm />

      <Table />
    </main>
  );
};

export default MainBlock;
