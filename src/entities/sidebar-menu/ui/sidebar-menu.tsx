import type { FC } from 'react';

import { SidebarLayer } from '../../../components';
import { SidebarMenuButton } from '../..';
import { sidebarMenuData } from '../../../mock-data/sidebar-menu-data';

import styles from './sidebar-menu.module.scss';

const SidebarMenu: FC = () => {
  return (
    <SidebarLayer className={styles.sidebarMenu}>
      <ul className={styles.sidebarMenu__list}>
        {sidebarMenuData.map((item) => (
          <li key={item.id}>
            <SidebarMenuButton icon={item.icon} title={item.title}/>
          </li>
        ))}
      </ul>
    </SidebarLayer>
  );
};

export default SidebarMenu;
