import type { FC } from 'react';

import styles from './sidebar-info-module.module.scss';

interface ISidebarInfoModule {
  title: string;
  info: string;
}

const SidebarInfoModule: FC<ISidebarInfoModule> = ({ title, info }) => {
  return (
    <li className={styles.sidebarInfoModule}>
      <p className={styles.sidebarInfoModule__title}>{title}</p>
      <p className={styles.sidebarInfoModule__info}>{info}</p>
    </li>
  );
};

export default SidebarInfoModule;
