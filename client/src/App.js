import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import AsideBar from './components/AsideBar';
import AsideBarAdmin from './components/AsideBarAdmin';
import { Context } from './index';
import { observer } from 'mobx-react-lite';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';

const App = observer(() => {
	const { user } = useContext(Context);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		check()
			.then(data => {
				user.setIsAuth(true);
				user.setUser(data);
			})
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <Spinner animation='grow' />;
	}

	return (
		<BrowserRouter>
			<NavBar />
			{user.isAuth ? <AsideBarAdmin /> : <AsideBar />}
			{/* когда мы находимся на стр регистр или логина то удалять бар */}
			<AppRouter />
		</BrowserRouter>
	);
});

export default App;
