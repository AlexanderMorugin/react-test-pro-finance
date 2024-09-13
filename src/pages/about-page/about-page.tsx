import type { FC } from 'react';

import { PageWidget, SidebarBlock } from '../../widgets';
import { ABOUT } from '../../shared/constants/constants';

const AboutPage: FC = () => {
  return (
    <>
      <SidebarBlock />
      <PageWidget title={ABOUT} />
    </>
  );
};

export default AboutPage;
