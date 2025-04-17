import React, { useContext, useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Context } from '../..';
import './HeadBar.css';
import { observer } from 'mobx-react-lite';
import {
	BarsOutlined,
	LoginOutlined,
	UserOutlined,
	LogoutOutlined,
} from '@ant-design/icons';
import {
	ADMIN_ROUTE,
	COURSE_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
	PROFILE_ROUTE,
	REGISTRATION_ROUTE,
} from '../../utils/consts';

const { Header } = Layout;

const HeadBar = observer(() => {
	const { user, student } = useContext(Context);
	const history = useHistory();
	const token = localStorage.getItem('token');
	const isTokenEmpty = !token;

	console.log(isTokenEmpty, 'is empty token?');

	const handlePageClick = () => {
		if (user.isAuth) {
			user.setUser({});
			user.setIsAuth(false);

			if (!isTokenEmpty) {
				localStorage.removeItem('token');
			}
		} else {
			history.push(LOGIN_ROUTE);
		}
	};

	const logoutClick = () => {
		if (student.isAuth) {
			student.setUser({});
			student.setIsAuth(false);

			if (!isTokenEmpty) {
				localStorage.removeItem('token');
			}
		}
		// else {
		// history.push(LOGIN_ROUTE);
		// }
	};

	const styleUser = {
		color: 'rgb(0, 21, 41)',
		backgroundColor: 'white',
		zIndex: '1000',
	};

	const styleAuth = {
		backgroundColor: 'rgb(0, 21, 41)',
		color: 'white',
		zIndex: '1000',
	};

	console.log('выполнен вход админа в систему?', user.isAuth);
	console.log(
		'выполнен вход пользователя(ака студента) в систему?',
		student.isAuth
	);

	const getItem = (key, label, icon, href) => {
		return {
			key,
			label,
			icon,
			href,
		};
	};

	const items = [
		getItem('0', 'Курс', <BarsOutlined />, COURSE_ROUTE),
		student.isAuth
			? getItem('1', 'Выйти из системы', <LogoutOutlined />, HOME_ROUTE)
			: getItem('1', 'Войти в систему', <LoginOutlined />, LOGIN_ROUTE),
		student.isAuth &&
			getItem('2', 'Моя страница', <UserOutlined />, PROFILE_ROUTE),
	];

	const admin = [getItem('0', 'Выйти из системы', null, HOME_ROUTE)];

	const handlerClick = e => {
		const selectedItem = items[e.key];
		if (selectedItem) {
			if (selectedItem.label === 'Выйти из системы') {
				logoutClick();
			} else {
				history.push(selectedItem.href);
			}
		}
	};

	return (
		<Header className='header' style={user.isAuth ? styleAuth : styleUser}>
			<div className='h-left'>
				{user.isAuth ? (
					<h2 onClick={() => history.push(ADMIN_ROUTE)}>Админ-панель</h2>
				) : (
					<h2 onClick={() => history.push(HOME_ROUTE)}>География</h2>
				)}
			</div>
			{user.isAuth ? (
				<Menu
					className='menu-horizontal-my'
					theme='dark'
					mode='horizontal'
					items={admin}
					onClick={e => handlePageClick(e)}
				/>
			) : (
				<div className='demo-logo h-right'>
					<Menu
						className='menu-horizontal-my'
						theme='light'
						mode='horizontal'
						items={items}
						onClick={e => handlerClick(e)}
					/>
				</div>
			)}
			{/* <div className='demo-logo h-right'>
				<p className='login-text' onClick={handlePageClick} title='Войти'>
					Личный кабинет
				</p>
				<GlobalOutlined onClick={handlePageClick} title='Войти'/>
			</div> */}
		</Header>
	);
});

export default HeadBar;
