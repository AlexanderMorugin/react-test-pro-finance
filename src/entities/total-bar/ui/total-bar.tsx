import type { FC } from 'react';

import styles from './total-bar.module.scss';

interface ITotalBar {
  totalQuantity: number;
  totalPrice: number;
}

const TotalBar: FC<ITotalBar> = ({ totalQuantity, totalPrice }) => {
  return (
    <div className={styles.totalBar}>
      <h3 className={styles.totalBar__title}>Итого:</h3>
      <span
        className={`${styles.totalBar__number} ${styles.totalBar__number_quantity}`}
      >
        {totalQuantity}
      </span>
      <span
        className={`${styles.totalBar__number} ${styles.totalBar__number_price}`}
      >
        {totalPrice}
      </span>
    </div>
  );
};

export default TotalBar;
