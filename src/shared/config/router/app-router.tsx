import { createBrowserRouter } from 'react-router-dom';
import Routes from '../routes/routes';
import {
  AboutPage,
  AgreementPage,
  InstructionsPage,
  LegalPage,
  MainPage,
  PrivacyPage,
  PublicPage,
  RootPage,
} from '../../../pages';

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
        element: <AgreementPage />,
      },
      {
        path: Routes.PRIVACY,
        element: <PrivacyPage />,
      },
      {
        path: Routes.LEGAL_INFO,
        element: <LegalPage />,
      },
      {
        path: Routes.PUBLIC_OFFER,
        element: <PublicPage />,
      },
      {
        path: Routes.ABOUT,
        element: <AboutPage />,
      },
      {
        path: Routes.INSTRUCTIONS,
        element: <InstructionsPage />,
      },
    ],
  },
]);

export default AppRouter;
