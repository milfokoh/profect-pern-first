import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { HOME_ROUTE } from '../utils/consts';
import { Context } from '..';

const AppRouter = () => {
	const { user } = useContext(Context);
	return (
		<Switch>
			{user.isAuth &&
				authRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} component={Component} exact />
				))}
			{publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} component={Component} exact />
			))}
			<Redirect to={HOME_ROUTE} />
		</Switch>
	);
};

export default AppRouter;
