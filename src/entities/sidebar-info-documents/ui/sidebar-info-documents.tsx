import type { FC } from 'react';
import { Link } from 'react-router-dom';

import { sidebarInfoDocumentsData } from '../../../mock-data/sidebar-info-documents-data';

import styles from './sidebar-info-documents.module.scss';

const SidebarInfoDocuments: FC = () => {
  return (
    <ul className={styles.sidebarInfoDocuments}>
      {sidebarInfoDocumentsData.map((item) => (
        <li key={item.id} className={styles.sidebarInfoDocuments__linkBox}>
          <Link to={item.route} className={styles.sidebarInfoDocuments__link}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarInfoDocuments;
