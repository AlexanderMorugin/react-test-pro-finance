import type { FC } from 'react';

import { sidebarInfoContactsData } from '../../../mock-data/sidebar-info-contacts-data';
import { SidebarInfoModule } from '../..';

import styles from './sidebar-info-contacts.module.scss';

const SidebarInfoContacts: FC = () => {
  return (
    <ul className={styles.sidebarInfoContacts}>
      {sidebarInfoContactsData.map((item) => (
        <SidebarInfoModule key={item.id} title={item.title} info={item.info} />
      ))}
    </ul>
  );
};

export default SidebarInfoContacts;
