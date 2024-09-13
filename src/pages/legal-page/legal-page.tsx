import type { FC } from 'react';

import { PageWidget, SidebarBlock } from '../../widgets';
import { LEGAL } from '../../shared/constants/constants';

const LegalPage: FC = () => {
  return (
    <>
      <SidebarBlock />
      <PageWidget title={LEGAL} />
    </>
  );
};

export default LegalPage;
