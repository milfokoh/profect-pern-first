import React from 'react';
import './style.css';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

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
						<span className='sidebar-icon'>☰</span>
						<span>Разделы</span>
					</div>
					<div className='sidebar-item'>
						<span className='sidebar-icon'>☖</span>
						<span>Материалы</span>
					</div>
					<div className='sidebar-item'>
						<span className='sidebar-icon'>👣</span>
						<span>Пользователи</span>
					</div>
				</aside>
			</div>
		);
	}
};

export default AsideBar;
