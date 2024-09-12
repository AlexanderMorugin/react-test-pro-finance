import type { FC } from 'react';

import { ButtonMenu } from '../..';

import styles from './sidebar-menu-header.module.scss';

interface ISidebarMenuHeader {
  onClick: () => void;
}

const SidebarMenuHeader: FC<ISidebarMenuHeader> = ({ onClick }) => {
  return (
    <div className={styles.sidebarMenuHeader}>
      <div className={styles.sidebarMenuHeader__titleBox}>
        <span className={styles.sidebarMenuHeader__logo}>Фин</span>
        <h3 className={styles.sidebarMenuHeader__title}>Контроль</h3>
      </div>
      <ButtonMenu onClick={onClick} />
    </div>
  );
};

export default SidebarMenuHeader;
