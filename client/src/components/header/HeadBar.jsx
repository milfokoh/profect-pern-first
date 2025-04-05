import React, { useContext } from 'react';
import { Layout, Menu } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Context } from '../..';
import './HeadBar.css';
import { observer } from 'mobx-react-lite';
import {
	BarsOutlined,
	HomeOutlined,
	SettingOutlined,
	UserOutlined,
} from '@ant-design/icons';
import {
	COURSE_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
	PROFILE_ROUTE,
	REGISTRATION_ROUTE,
} from '../../utils/consts';

const { Header } = Layout;

const HeadBar = observer(() => {
	const { user } = useContext(Context);
	const history = useHistory();

	const handlePageClick = () => {
		if (user.isAuth) {
			user.setUser({});
			user.setIsAuth(false);
		} else history.push(LOGIN_ROUTE);
	};

	const styleUser = {
		color: 'rgb(0, 21, 41)',
		backgroundColor: 'white',
	};

	const styleAuth = {
		backgroundColor: 'rgb(0, 21, 41)',
		color: 'white',
	};

	console.log('выполнен вход пользователя в систему?', user.isAuth);

	const getItem = (key, label, icon, href) => {
		return {
			key,
			label,
			icon,
			href,
		};
	};

	const items = [
		// getItem('0', 'Профиль', <UserOutlined />, PROFILE_ROUTE),
		getItem('0', 'Курс', <BarsOutlined />, COURSE_ROUTE),
		getItem('1', 'Личный кабинет', <UserOutlined />, LOGIN_ROUTE),
	];

	const admin = [getItem('0', 'Выйти из системы', null, HOME_ROUTE)];

	const handlerClick = e => {
		return history.push(items[e.key].href);
	};

	return (
		<Header className='header' style={user.isAuth ? styleAuth : styleUser}>
			<div className='h-left'>
				<h2 onClick={() => history.push(HOME_ROUTE)}>
					{user.isAuth ? 'Админ-панель' : 'География'}
				</h2>
			</div>
			{user.isAuth ? (
				<Menu
					className='menu-horizontal-my'
					theme='dark'
					mode='horizontal'
					items={admin}
					onClick={() => handlePageClick()}
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
