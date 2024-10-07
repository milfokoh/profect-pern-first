import React from 'react';
import './style.css';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const AsideBar = () => {
	const location = useLocation();
	if (
		location.pathname !== LOGIN_ROUTE &&
		location.pathname !== REGISTRATION_ROUTE
	) {
		return (
			<div className='d-flex'>
				<aside className='sidebar'>
					<div className='sidebar-item'>
						<span className='sidebar-icon'>👤</span>
						<span>Профиль</span>
					</div>
					<div className='sidebar-item'>
						<span className='sidebar-icon'>&#x1F4DC;</span>
						<span>Курсы</span>
					</div>
					<div className='sidebar-item'>
						<span className='sidebar-icon'>&#x1F527;</span>
						<span>Настройки</span>
					</div>
				</aside>
			</div>
		);
	}
};

export default AsideBar;
