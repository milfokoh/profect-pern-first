import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Context } from '../..';
import { HOME_ROUTE } from '../../utils/consts';
import { observer } from 'mobx-react-lite';
import { authRoutes, publicRoutes } from '@app/../routes';

const AppRouter = observer(() => {
	const { user, student } = useContext(Context);

	return (
		<Switch>
			{user.isAuth &&
				authRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} component={Component} exact />
				))}
			{student.isAuth &&
				publicRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} component={Component} exact />
				))}
			{publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} component={Component} exact />
			))}
			<Redirect to={HOME_ROUTE} />
		</Switch>
	);
});
export default AppRouter;
