import { ButtonHTMLAttributes, type FC } from 'react';
import {
  FaLongArrowAltRight,
  FaClipboardList,
  FaFileUpload,
  FaFileImport,
  FaFileMedicalAlt,
  FaTimes,
} from 'react-icons/fa';

import styles from './custom-button.module.scss';

interface ICustomButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  title?: string;
  onClick?: () => void;
  instructions?: boolean;
  upload?: boolean;
  importing?: boolean;
  change?: boolean;
  reset?: boolean;
}

const CustomButton: FC<ICustomButton> = ({
  className,
  title,
  onClick,
  disabled,
  about = false,
  instructions = false,
  upload = false,
  importing = false,
  change = false,
  reset = false,
}) => {
  return (
    <button
      type='button'
      className={`${className} ${styles.customButton}`}
      onClick={onClick}
      disabled={disabled}
    >
      {instructions && (
        <FaClipboardList className={styles.customButton__icon} />
      )}
      {upload && <FaFileUpload className={styles.customButton__icon} />}
      {importing && (
        <FaFileImport className={styles.customButton__iconImport} />
      )}
      {change && (
        <FaFileMedicalAlt className={styles.customButton__iconImport} />
      )}

      {title}

      {about && (
        <FaLongArrowAltRight className={styles.customButton__iconAbout} />
      )}
      {reset && <FaTimes className={styles.customButton__iconReset} />}
    </button>
  );
};

export default CustomButton;
