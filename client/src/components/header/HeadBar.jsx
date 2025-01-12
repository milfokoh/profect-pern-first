import React, { useContext } from 'react';
import { Layout } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { HOME_ROUTE, LOGIN_ROUTE } from '../../utils/consts';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Context } from '../..';
import './HeadBar.css';
import { observer } from 'mobx-react-lite';

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

	return (
		<Header className='header' style={user.isAuth ? styleAuth : styleUser}>
			<div className='h-left'>
				<h2 onClick={() => history.push(HOME_ROUTE)}>
					{user.isAuth ? 'Админ-панель' : 'География'}
				</h2>
			</div>
			<div className='demo-logo h-right'>
				<p className='login-text' onClick={handlePageClick} title='Войти'>
					Личный кабинет
				</p>
				{/* <GlobalOutlined onClick={handlePageClick} title='Войти'/> */}
			</div>
		</Header>
	);
});

export default HeadBar;
