import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
	AppRouter,
	AsideBar,
	HeadBar,
	AsideAdminBar,
	FooterMulti,
	Spinner,
} from './components';
import { Context } from '.';
import { check } from './http/userAPI';
import { observer } from 'mobx-react-lite';
import { Layout } from './UI';

const App = observer(() => {
	const { user } = useContext(Context);
	const [collapsed, setCollapsed] = useState(true);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		check()
			.then(data => {
				user.setUser(data);
				user.setIsAuth(true);
			})
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <Spinner />;
	}

	const footerStyle = {
		textAlign: 'center',
		color: '#fff',
		backgroundColor: '#4096ff',
	};

	return (
		<BrowserRouter>
			<Layout>
				{
					user.isAuth ? (
						<AsideAdminBar collapsed={collapsed} setCollapsed={setCollapsed} />
					) : null
					// <AsideBar collapsed={collapsed} setCollapsed={setCollapsed} />
				}

				<Layout>
					<HeadBar />
					<AppRouter />
					<FooterMulti />
				</Layout>
			</Layout>
		</BrowserRouter>
	);
});

export default App;
