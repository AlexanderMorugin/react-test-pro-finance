import type { FC } from 'react';

import { SidebarLayer } from '../../../components';
import { SidebarInfoContacts, SidebarInfoDocuments } from '../..';

import styles from './sidebar-info.module.scss';

const SidebarInfo: FC = () => {
  return (
    <SidebarLayer className={styles.sidebarInfo}>
      <h3 className={styles.sidebarInfo__title}>Техническая поддержка</h3>
      <SidebarInfoContacts />
      <SidebarInfoDocuments />
    </SidebarLayer>
  );
};

export default SidebarInfo;
