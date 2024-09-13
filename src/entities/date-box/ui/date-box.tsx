import { type FC } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

import styles from './date-box.module.scss';

const DateBox: FC = () => {
  return (
    <div className={styles.dateBox}>
      <FaCalendarAlt className={styles.dateBox__icon} />
      <p className={styles.dateBox__date}>Тариф до 15.04.2024</p>
    </div>
  );
};

export default DateBox;
