import HomeContent from './components/page-home/HomeContent';
import SectionContent from './pages/page-section/SectionContent';
import AuthPage from './pages/page-auth/AuthPage';
import AdminHomePage from './pages/page-admin/AdminHomePage';
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
		Component: AdminHomePage,
	},
];
export const publicRoutes = [
	{
		path: HOME_ROUTE,
		Component: HomeContent,
	},
	{
		path: SECTION_ROUTE + '/:id',
		Component: SectionContent,
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
