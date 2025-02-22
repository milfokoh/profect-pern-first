import {
	ADMIN_ROUTE,
	COURSE_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
	PROFILE_ROUTE,
	REGISTRATION_ROUTE,
	SECTION_ROUTE,
	SECTION_TABLE_ROUTE,
} from './utils/consts';
import HomeContent from './pages/page-home/HomeContent';
import AdminHomePage from './pages/page-admin/AdminHomePage';
import AuthPage from './pages/page-auth/AuthPage';
import SectionContent from './pages/page-section/SectionContent';
import TableSectionPage from './pages/page-table-admin/table-section/TableSectionPage';
import ProfilPage from './pages/page-profil/ProfilePage';
import MainPage from './pages/page-main/MainPage';

const authRoutes = [
	{
		path: ADMIN_ROUTE,
		Component: AdminHomePage,
	},
	{
		path: SECTION_TABLE_ROUTE,
		Component: TableSectionPage,
	},
];
export const publicRoutes = [
	{
		path: HOME_ROUTE,
		// Component: HomeContent,
		Component: MainPage,
	},
	{
		path: COURSE_ROUTE,
		Component: HomeContent,
	},
	{
		path: PROFILE_ROUTE, // + :id
		Component: ProfilPage,
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

export default authRoutes;
