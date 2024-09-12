import { createBrowserRouter } from 'react-router-dom';
import Routes from '../routes/routes';
import { MainPage, RootPage } from '../../../pages';

const AppRouter = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <RootPage />,
    // errorElement: <NotFoundPage />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: Routes.AGREEMENT,
        element: <MainPage />,
      },
      {
        path: Routes.PRIVACY,
        element: <MainPage />,
      },
      {
        path: Routes.LEGAL_INFO,
        element: <MainPage />,
      },
      {
        path: Routes.PUBLIC_OFFER,
        element: <MainPage />,
      },
    ],
  },
]);

export default AppRouter;
