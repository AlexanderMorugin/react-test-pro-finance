import type { FC } from 'react';

import { MainBlock, SidebarBlock } from '../../widgets';

const MainPage: FC = () => {
  return (
    <>
      <SidebarBlock />
      <MainBlock />
    </>
  );
};

export default MainPage;
