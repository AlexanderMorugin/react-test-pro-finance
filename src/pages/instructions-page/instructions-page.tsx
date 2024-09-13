import type { FC } from 'react';

import { PageWidget, SidebarBlock } from '../../widgets';
import { INSTRUCTIONS } from '../../shared/constants/constants';

const InstructionsPage: FC = () => {
  return (
    <>
      <SidebarBlock />
      <PageWidget title={INSTRUCTIONS} />
    </>
  );
};

export default InstructionsPage;
