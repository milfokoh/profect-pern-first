import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/router/AppRouter';
import { Layout } from 'antd';
import AsideBar from './components/aside/AsideBar';
import HeadBar from './components/header/HeadBar';
import { Context } from '.';
import AsideAdminBar from './components/aside-admin/AsideAdminBar';
import { check } from './http/userAPI';
import Spinner from './components/spinner/Spinner';
import { observer } from 'mobx-react-lite';
import FooterMulti from './components/footer/FooterMulti';

const App = observer(() => {
	const { user } = useContext(Context);
	const [collapsed, setCollapsed] = useState(false);
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
				{user.isAuth ? (
					<AsideAdminBar collapsed={collapsed} setCollapsed={setCollapsed} />
				) : null
				// (<AsideBar collapsed={collapsed} setCollapsed={setCollapsed} />)
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
