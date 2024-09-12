import type { FC } from 'react';
import { FaTimes } from 'react-icons/fa';

import styles from './button-menu.module.scss';

interface IButtonMenu {
  onClick: () => void;
}

const ButtonMenu: FC<IButtonMenu> = ({ onClick }) => {
  return (
    <button className={styles.buttonMenu} onClick={onClick}>
      <span className={styles.buttonMenu__title}>Меню</span>
      <FaTimes className={styles.buttonMenu__icon} />
    </button>
  );
};

export default ButtonMenu;
