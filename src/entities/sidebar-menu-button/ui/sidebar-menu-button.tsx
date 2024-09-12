import { type FC, ReactNode, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

import styles from './sidebar-menu-button.module.scss';

interface ISidebarMenuButton {
  icon: ReactNode;
  title: string;
}

const SidebarMenuButton: FC<ISidebarMenuButton> = ({ icon, title }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <li>
      <button className={styles.sidebarMenuButton} onClick={handleClick}>
        <div className={styles.sidebarMenuButton__titleBox}>
          {icon}
          <p className={styles.sidebarMenuButton__title}>{title}</p>
        </div>
        <FaCaretDown
          className={`${styles.sidebarMenuButton__arrow} ${
            isActive && styles.sidebarMenuButton__arrow_active
          }`}
        />
      </button>
      <div
        className={
          isActive
            ? `${styles.sidebarMenuButton__children}`
            : `${styles.sidebarMenuButton__children} ${styles.sidebarMenuButton__children_close}`
        }
      >
        {isActive && (
          <span className={styles.sidebarMenuButton__content}>
            Здесь будет какой то текст или ссылки
          </span>
        )}
      </div>
    </li>
  );
};

export default SidebarMenuButton;
