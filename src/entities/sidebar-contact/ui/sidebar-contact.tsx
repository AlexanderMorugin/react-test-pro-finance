import type { FC } from 'react';
import { FaCommentDots } from 'react-icons/fa';

import styles from './sidebar-contact.module.scss';

const SidebarContact: FC = () => {
  return (
    <button className={styles.sidebarContact} onClick={() => {}}>
      <FaCommentDots className={styles.sidebarContact__icon} />
      <span className={styles.sidebarContact__title}>Связаться с нами</span>
    </button>
  );
};

export default SidebarContact;
