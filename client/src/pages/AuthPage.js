import React, { useContext, useState } from 'react';
import { Nav, Container, Form, Card, Button, Row } from 'react-bootstrap';
import './style.css';
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { useHistory, useLocation } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const AuthPage = observer(() => {
	const { user } = useContext(Context);
	const location = useLocation();
	const history = useHistory();
	const isLogin = location.pathname === LOGIN_ROUTE;

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const click = async () => {
		try {
			let data;
			if (isLogin) {
				data = await login(email, password);
			} else {
				data = await registration(email, password);
			}
			user.setUser(data);
			user.setIsAuth(true);
			history.push(HOME_ROUTE);
		} catch (error) {
			alert(error.response.data.message);
		}
	};

	return (
		<Container className='body-row-authent'>
			<Card className='card-auth'>
				<h2 className='login-title'>
					{isLogin ? 'Авторизация' : 'Регистрация'}
				</h2>
				<Form className='form-card'>
					<Form.Control
						placeholder='Введите email'
						className='input-form'
						value={email}
						onChange={e => setEmail(e.target.value)}
					></Form.Control>
					<Form.Control
						placeholder='Введите password'
						className='input-form'
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
					></Form.Control>
					<Row className='row-form'>
						{isLogin ? (
							<div>
								Нет аккаунта?
								<Nav.Link href={REGISTRATION_ROUTE}>Зарегистрируйся!</Nav.Link>
							</div>
						) : (
							<div>
								Есть аккаунт?
								<Nav.Link href={LOGIN_ROUTE}>Войдите!</Nav.Link>
							</div>
						)}
					</Row>
					<button className='btn-form-req' onClick={click}>
						{isLogin ? 'Войти' : 'Регистрация'}
					</button>
				</Form>
			</Card>
		</Container>
	);
});

export default AuthPage;
