import React from 'react';
import {
	BarsOutlined,
	HomeOutlined,
	SettingOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import './AsideBar.css';
import {
	COURSE_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
	PROFILE_ROUTE,
	REGISTRATION_ROUTE,
} from '../../utils/consts';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { observer } from 'mobx-react-lite';

const { Sider } = Layout;

function getItem(key, label, icon, href) {
	return {
		key,
		label,
		icon,
		href,
	};
}
const items = [
	getItem('0', 'Главная страница', <HomeOutlined />, HOME_ROUTE),
	getItem('1', 'Профиль', <UserOutlined />, PROFILE_ROUTE),
	getItem('2', 'Курс', <BarsOutlined />, COURSE_ROUTE),
	getItem('3', 'Настройки', <SettingOutlined />),
];

const AsideBar = observer(({ collapsed, setCollapsed }) => {
	const location = useLocation();
	const history = useHistory();
	// console.log(location);

	const handlerClick = e => {
		return history.push(items[e.key].href);
	};

	//TODO: при нажатии на определенную кнопку оставлять фокус на ней, если ее href совпадает с location.pathname
	// const handlerChange = e => {
	// 	if (location.pathname == items[e.key].href) {
	// 		return location.pathname;
	// 	}
	// };

	if (
		location.pathname !== LOGIN_ROUTE &&
		location.pathname !== REGISTRATION_ROUTE
	) {
		return (
			<Sider
				theme='light'
				// collapsible
				collapsed={collapsed || true}
				onCollapse={value => setCollapsed(value)}
			>
				<div className='demo-logo-vertical' />
				<Menu
					theme='light'
					defaultSelectedKeys={['0']}
					mode='inline'
					items={items}
					className='menu'
					onClick={e => handlerClick(e)}
				/>
			</Sider>
		);
	}
});

export default AsideBar;
