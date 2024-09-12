import type { FC } from 'react';

import { SidebarContact, SidebarInfo, SidebarMenu } from '../../../entities';

import styles from './sidebar-block.module.scss';

const SidebarBlock: FC = () => {
  return (
    <aside className={styles.sidebarBlock}>
      <SidebarMenu />
      <SidebarInfo />
      <SidebarContact />
    </aside>
  );
};

export default SidebarBlock;
