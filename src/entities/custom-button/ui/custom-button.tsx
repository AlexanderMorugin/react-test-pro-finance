import type { FC } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

import styles from './custom-button.module.scss';

interface ICustomButton {
  className?: string;
  title: string;
  onClick: () => void;
  about?: boolean;
}

const CustomButton: FC<ICustomButton> = ({
  className,
  title,
  onClick,
  about = false,
}) => {
  return (
    <button className={`${className} ${styles.customButton}`} onClick={onClick}>
      {title}
      {about && <FaLongArrowAltRight className={styles.customButton__iconAbout}/>}
    </button>
  );
};

export default CustomButton;
