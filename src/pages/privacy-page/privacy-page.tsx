import type { FC } from 'react';

import { PageWidget, SidebarBlock } from '../../widgets';
import { PRIVACY } from '../../shared/constants/constants';

const PrivacyPage: FC = () => {
  return (
    <>
      <SidebarBlock />
      <PageWidget title={PRIVACY} />
    </>
  );
};

export default PrivacyPage;
