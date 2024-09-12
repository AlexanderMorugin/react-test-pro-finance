import { type FC, ReactNode } from 'react';

import styles from './sidebar-layer.module.scss';

interface ISidebarLayer {
  className?: string;
  children: ReactNode;
}
const SidebarLayer: FC<ISidebarLayer> = ({ className, children }) => {
  return (
    <div className={`${className} ${styles.sidebarLayer}`}>{children}</div>
  );
};

export default SidebarLayer;
