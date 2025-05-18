import React from 'react';
import {
	HomeOutlined,
	OrderedListOutlined,
	TeamOutlined,
	UngroupOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import {
	ADMIN_ROUTE,
	LOGIN_ROUTE,
	MATERIAL_TABLE_ROUTE,
	REGISTRATION_ROUTE,
	SECTION_TABLE_ROUTE,
	USER_TABLE_ROUTE,
} from '../../utils/consts';
import { useLocation, useHistory } from 'react-router-dom';
import './AsideAdminBar.css';
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
	getItem('Главная страница', '1', <HomeOutlined />, ADMIN_ROUTE),
	getItem('Разделы', '2', <UngroupOutlined />, SECTION_TABLE_ROUTE),
	getItem('Материалы', '3', <OrderedListOutlined />, MATERIAL_TABLE_ROUTE),
	getItem('Пользователи', '4', <TeamOutlined />, USER_TABLE_ROUTE),
];

const AsideAdminBar = observer(({ collapsed, setCollapsed }) => {
	const location = useLocation();
	const history = useHistory();

	const handlerClick = e => {
		return history.push(items[e.key - 1].href);
	};

	if (
		location.pathname !== LOGIN_ROUTE &&
		location.pathname !== REGISTRATION_ROUTE
	) {
		return (
			<Sider
				theme='light'
				collapsible
				collapsed={collapsed}
				onCollapse={value => setCollapsed(value)}
			>
				<div className='demo-logo-vertical' />
				<Menu
					theme='light'
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

export default AsideAdminBar;
