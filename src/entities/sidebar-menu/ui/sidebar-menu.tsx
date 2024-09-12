import { useState, type FC } from 'react';

import { SidebarLayer } from '../../../components';
import { SidebarMenuButton, SidebarMenuHeader } from '../..';
import { sidebarMenuData } from '../../../mock-data/sidebar-menu-data/sidebar-menu-data';

import styles from './sidebar-menu.module.scss';

const SidebarMenu: FC = () => {
  const [showMenu, setShowMenu] = useState(true);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    showMenu && (
      <SidebarLayer className={styles.sidebarMenu}>
        <SidebarMenuHeader onClick={handleClick} />
        <ul className={styles.sidebarMenu__list}>
          {sidebarMenuData.map((item) => (
            <SidebarMenuButton
              key={item.id}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </ul>
      </SidebarLayer>
    )
  );
};

export default SidebarMenu;
