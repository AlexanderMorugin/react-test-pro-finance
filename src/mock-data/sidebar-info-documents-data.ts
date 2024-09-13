import Routes from '../shared/config/routes/routes';
import {
  AGREEMENT,
  LEGAL,
  PRIVACY,
  PUBLIC,
} from '../shared/constants/constants';

export const sidebarInfoDocumentsData = [
  {
    id: 1,
    title: AGREEMENT,
    route: Routes.AGREEMENT,
  },
  {
    id: 2,
    title: PRIVACY,
    route: Routes.PRIVACY,
  },
  {
    id: 3,
    title: LEGAL,
    route: Routes.LEGAL_INFO,
  },
  {
    id: 4,
    title: PUBLIC,
    route: Routes.PUBLIC_OFFER,
  },
];
