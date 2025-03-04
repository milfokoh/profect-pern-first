import React, { FC, useContext, useState } from 'react';
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
import './AuthPage.styled.ts';
import { observer } from 'mobx-react-lite';
import { TAuthPage } from './AuthPage.types.ts';
import {
	BackgroundImage,
	BodyForm,
	ButtonSub,
	HeaderTitle,
	StyledFormItem,
	WrapperForm,
} from './AuthPage.styled.ts';
import { FigureImage } from '@app/../UI';

const AuthPage: FC<TAuthPage> = observer(() => {
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
		<WrapperForm>
			<BackgroundImage src='/image/page-auth/background/background_image_rgo.jpg' />
			<BodyForm layout='vertical'>
				<HeaderTitle className='center'>
					{isLogin ? 'Авторизация' : 'Регистрация'}
				</HeaderTitle>
				<StyledFormItem label='Логин'>
					<Input
						size='large'
						placeholder='Введите логин'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</StyledFormItem>
				<StyledFormItem label='Пароль'>
					<Input.Password
						size='large'
						placeholder='Введите пароль'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</StyledFormItem>
				<StyledFormItem>
					<ButtonSub type='primary' onClick={click}>
						{isLogin ? 'Войти' : 'Регистрация'}
					</ButtonSub>
				</StyledFormItem>
				{isLogin ? (
					<p>
						Еще нет аккаунта?
						<Button color='default' variant='link' href={REGISTRATION_ROUTE}>
							Зарегистрируйся!
						</Button>
					</p>
				) : (
					<p>
						Уже есть аккаунт?
						<Button color='default' variant='link' href={LOGIN_ROUTE}>
							Войти!
						</Button>
					</p>
				)}
			</BodyForm>
		</WrapperForm>
	);
});

export default AuthPage;
