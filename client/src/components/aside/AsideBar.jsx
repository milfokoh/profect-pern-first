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
	REGISTRATION_ROUTE,
} from '../../utils/consts';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { observer } from 'mobx-react-lite';

const { Sider } = Layout;

function getItem(label, key, icon, href) {
	return {
		key,
		icon,
		label,
		href,
	};
}
const items = [
	getItem('Главная страница', '1', <HomeOutlined />, HOME_ROUTE),
	getItem('Профиль', '2', <UserOutlined />),
	getItem('Курс', '3', <BarsOutlined />, HOME_ROUTE),
	getItem('Настройки', '4', <SettingOutlined />, HOME_ROUTE),
];

const AsideBar = observer(({ collapsed, setCollapsed }) => {
	const location = useLocation();
	const history = useHistory();
	// console.log(location);

	const handlerClick = e => {
		return history.push(items[e.key - 1].href);
	};

	if (
		location.pathname !== LOGIN_ROUTE &&
		location.pathname !== REGISTRATION_ROUTE
	) {
		return (
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={value => setCollapsed(value)}
			>
				<div className='demo-logo-vertical' />
				<Menu
					theme='dark'
					defaultSelectedKeys={['1']}
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
