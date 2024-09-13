import type { FC } from 'react';

import { PageWidget, SidebarBlock } from '../../widgets';
import { PUBLIC } from '../../shared/constants/constants';

const PublicPage: FC = () => {
  return (
    <>
      <SidebarBlock />
      <PageWidget title={PUBLIC} />
    </>
  );
};

export default PublicPage;
