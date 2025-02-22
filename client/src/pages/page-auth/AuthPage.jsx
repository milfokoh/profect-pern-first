import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { Context } from '../..';
import {
	ADMIN_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
	REGISTRATION_ROUTE,
} from '../../utils/consts';
import { login, registration } from '../../http/userAPI';
import './AuthPage.css';
import { observer } from 'mobx-react-lite';
import { Layout } from '@app/../UI';

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
			user.setUser(user);
			user.setIsAuth(true);
			history.push(ADMIN_ROUTE);
		} catch (error) {
			alert(error.response.data.message);
		}
	};
	return (
		<Layout className='wrapper-form'>
			<Form layout='vertical' className='body-form'>
				<h2 className='center'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
				<Form.Item label='Логин'>
					<Input
						size='large'
						placeholder='Введите логин'
						value={email}
						onChange={e => setEmail(e.target.value)}
						className='color-border'
					/>
				</Form.Item>
				<Form.Item label='Пароль'>
					<Input.Password
						size='large'
						placeholder='Введите пароль'
						value={password}
						onChange={e => setPassword(e.target.value)}
						className='color-border'
					/>
				</Form.Item>
				<Form.Item>
					<Button type='primary' className='btn-sub' onClick={click}>
						{isLogin ? 'Войти' : 'Регистрация'}
					</Button>
				</Form.Item>
				{isLogin ? (
					<p className='p-auth'>
						Еще нет аккаунта?
						<Button
							color='default'
							variant='link'
							href={REGISTRATION_ROUTE}
							className='btn-link'
						>
							Зарегистрируйся!
						</Button>
					</p>
				) : (
					<p className='p-auth'>
						Уже есть аккаунт?
						<Button
							color='default'
							variant='link'
							href={LOGIN_ROUTE}
							className='btn-link'
						>
							Войти!
						</Button>
					</p>
				)}
			</Form>
		</Layout>
	);
});

export default AuthPage;
