import type { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import AppRouter from '../shared/config/router/app-router';

const App: FC = () => {
  return <RouterProvider router={AppRouter} />;
};

export default App;
