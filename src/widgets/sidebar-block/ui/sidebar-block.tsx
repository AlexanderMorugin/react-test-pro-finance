import type { FC } from 'react';

import { SidebarMenu } from '../../../entities';

import styles from './sidebar-block.module.scss';

const SidebarBlock: FC = () => {
  return (
    <aside className={styles.sidebarBlock}>
      <SidebarMenu />
    </aside>
  );
};

export default SidebarBlock;
