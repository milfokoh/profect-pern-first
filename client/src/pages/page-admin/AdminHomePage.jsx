import React from 'react';
import { Calendar, Col, Empty, Row } from 'antd';
import './AdminHomePage.css';
import { Layout } from '@app/../UI';

const AdminHomePage = () => {
	return (
		<Layout className='body-wrapper'>
			<h2>Добро пожаловать на панель администратора!</h2>

			<Row className='row'>
				<Col className='item item1'>
					<Calendar fullscreen={false} />
				</Col>
				<Col className='item item2'>
					<Empty />
				</Col>
				<Col className='item item3'>
					<Empty />
				</Col>
			</Row>
		</Layout>
	);
};

export default AdminHomePage;
