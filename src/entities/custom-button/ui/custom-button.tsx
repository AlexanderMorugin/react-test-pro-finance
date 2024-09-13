import type { FC } from 'react';
import { FaLongArrowAltRight, FaClipboardList } from 'react-icons/fa';

import styles from './custom-button.module.scss';

interface ICustomButton {
  className?: string;
  title: string;
  onClick: () => void;
  about?: boolean;
  instructions?: boolean;
}

const CustomButton: FC<ICustomButton> = ({
  className,
  title,
  onClick,
  about = false,
  instructions = false,
}) => {
  return (
    <button
      type='button'
      className={`${className} ${styles.customButton}`}
      onClick={onClick}
    >
      {instructions && (
        <FaClipboardList className={styles.customButton__icon} />
      )}
      {title}
      {about && (
        <FaLongArrowAltRight className={styles.customButton__iconAbout} />
      )}
    </button>
  );
};

export default CustomButton;
