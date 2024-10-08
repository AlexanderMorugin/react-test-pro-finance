import {
  FaCog,
  FaClipboardCheck,
  FaClipboardList,
  FaBookOpen,
} from 'react-icons/fa';

import styles from './sidebar-menu-data.module.scss';

export const sidebarMenuData = [
  {
    id: 1,
    icon: <FaCog className={styles.icon} />,
    title: 'Настройки',
  },
  {
    id: 2,
    icon: <FaClipboardCheck className={styles.icon} />,
    title: 'Внесение данных',
  },
  {
    id: 3,
    icon: <FaClipboardList className={styles.icon} />,
    title: 'Отчеты',
  },
  {
    id: 4,
    icon: <FaBookOpen className={styles.icon} />,
    title: 'База знаний',
  },
];
