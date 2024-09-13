import type { FC } from 'react';
import { FaUserCircle } from 'react-icons/fa';

import styles from './profile-box.module.scss';

interface IProfileBox {
  name: string;
}

const ProfileBox: FC<IProfileBox> = ({ name }) => {
  return (
    <div className={styles.profileBox}>
      <FaUserCircle className={styles.profileBox__icon} />
      <span className={styles.profileBox__name}>{name}</span>
    </div>
  );
};

export default ProfileBox;
