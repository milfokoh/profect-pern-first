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

	const styleAuth = {
		color: 'rgb(0, 21, 41)',
		backgroundColor: 'white',
	};

	const styleUser = {
		backgroundColor: 'rgb(0, 21, 41)',
		color: 'white',
	};

	console.log('выполнен вход пользователя в систему?', user.isAuth);

	return (
		<Header className='header' style={user.isAuth ? styleAuth : styleUser}>
			<h2 className='h-left' onClick={() => history.push(HOME_ROUTE)}>
				{user.isAuth ? 'Админ-панель' : 'География'}
			</h2>
			<div className='demo-logo h-right'>
				<GlobalOutlined onClick={handlePageClick} />
			</div>
		</Header>
	);
});

export default HeadBar;
