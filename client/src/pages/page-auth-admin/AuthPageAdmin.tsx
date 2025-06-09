import { FC, useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Input, message } from 'antd';
import { Context } from '../../index.js';
import { ADMIN_ROUTE, LOG_ADMIN_ROUTE } from '../../utils/consts.js';
import { login, registration } from '../../http/userAPI.js';
import { observer } from 'mobx-react-lite';
import { TAuthPageAdmin } from './AuthPageAdmin.types.ts';
import {
	BackgroundImage,
	BodyForm,
	ButtonSub,
	HeaderTitle,
	StyledFormItem,
	WrapperForm,
} from './AuthPageAdmin.styled.ts';

const AuthPage: FC<TAuthPageAdmin> = observer(() => {
	const { user } = useContext(Context);
	const location = useLocation();
	const history = useHistory();
	const isLogin = location.pathname === LOG_ADMIN_ROUTE;

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
			history.push(ADMIN_ROUTE);
		} catch (error) {
			message.error(error.response.data.message);
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<WrapperForm>
			<BackgroundImage src='/image/page-auth/background/background_image_program.jpg' />
			<BodyForm layout='vertical'>
				<HeaderTitle className='center'>Авторизация</HeaderTitle>
				<StyledFormItem>
					Логин
					<Input
						size='large'
						placeholder='Введите логин'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</StyledFormItem>
				<StyledFormItem>
					Пароль
					<Input.Password
						size='large'
						placeholder='Введите пароль'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</StyledFormItem>
				<StyledFormItem>
					<ButtonSub type='primary' onClick={click}>
						Войти
					</ButtonSub>
				</StyledFormItem>
			</BodyForm>
		</WrapperForm>
	);
});

export default AuthPage;
