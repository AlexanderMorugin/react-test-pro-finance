import type { FC } from 'react';

import styles from './page-widget.module.scss';
import { Link } from 'react-router-dom';
import Routes from '../../../shared/config/routes/routes';

interface IPageWidget {
  title: string;
}

const PageWidget: FC<IPageWidget> = ({ title }) => {
  return (
    <div className={styles.pageWidget}>
      <h1 className={styles.pageWidget__title}>{title}</h1>
      <Link to={Routes.HOME} className={styles.pageWidget__link}>
        вернуться на главную
      </Link>
    </div>
  );
};

export default PageWidget;
