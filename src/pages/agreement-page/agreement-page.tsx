import type { FC } from 'react';

import { PageWidget, SidebarBlock } from '../../widgets';
import { AGREEMENT } from '../../shared/constants/constants';

const AgreementPage: FC = () => {
  return (
    <>
      <SidebarBlock />
      <PageWidget title={AGREEMENT} />
    </>
  );
};

export default AgreementPage;
