import React, { useContext } from 'react';
import { Button, Col, Layout, Row } from 'antd';
import './FooterMulti.css';
import { Context } from '../..';
import { HOME_ROUTE, COURSE_ROUTE } from '../../utils/consts';

const { Footer } = Layout;

const navigationForAuth = () => {
	return (
		<Row className='row-auth'>
			<Col className='borColor'>
				<h5>Навигация по страницам студентов:</h5>
			</Col>
			<Col className='borColor'>...</Col>

			<Col className='borColor'>
				<Button color='default' variant='link' href={HOME_ROUTE}>
					Главная страница
				</Button>
			</Col>
			<Col className='borColor'>2</Col>
			<Col className='borColor'>
				<Button color='default' variant='link' href={COURSE_ROUTE}>
					Страница с курсами
				</Button>
			</Col>
			<Col className='borColor'>4</Col>
		</Row>
	);
};

const FooterMulti = () => {
	const { user } = useContext(Context);

	return (
		<Footer className='foot'>
			{user.isAuth && navigationForAuth()}
			<p style={{ textAlign: 'center' }}>
				FIRST DESIGN ©{new Date().getFullYear()} Created by ALESYA TROSHINA
			</p>
		</Footer>
	);
};
export default FooterMulti;
