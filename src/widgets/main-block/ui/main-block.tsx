import type { FC } from 'react';

import {
  FilterForm,
  PageHeading,
  ProfileBar,
  Table,
  UploadBar,
} from '../../../entities';

import styles from './main-block.module.scss';

const MainBlock: FC = () => {
  return (
    <main className={styles.mainBlock}>
      <ProfileBar />
      <PageHeading />
      <FilterForm />
      <UploadBar />
      <Table />
    </main>
  );
};

export default MainBlock;
