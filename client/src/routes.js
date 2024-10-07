import AdminPanel from './pages/AdminPanel';
import HomePage from './pages/HomePage';
import SectionPage from './pages/SectionPage';
import AuthPage from './pages/AuthPage';
import {
	ADMIN_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
	REGISTRATION_ROUTE,
	SECTION_ROUTE,
} from './utils/consts';

export const authRoutes = [
	{
		path: ADMIN_ROUTE,
		Component: AdminPanel,
	},
];
export const publicRoutes = [
	{
		path: HOME_ROUTE,
		Component: HomePage,
	},
	{
		path: SECTION_ROUTE + '/:id',
		Component: SectionPage,
	},
	{
		path: LOGIN_ROUTE,
		Component: AuthPage,
	},
	{
		path: REGISTRATION_ROUTE,
		Component: AuthPage,
	},
];
