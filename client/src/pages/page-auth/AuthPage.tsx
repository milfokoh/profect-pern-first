import { FC, useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Input, message } from 'antd';
import { Context } from '../..';
import {
	LOGIN_ROUTE,
	PROFILE_ROUTE,
	REGISTRATION_ROUTE,
} from '../../utils/consts';
import { login, registration } from '../../http/studentAPI';
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

const AuthPage: FC<TAuthPage> = observer(() => {
	const { student } = useContext(Context);
	const location = useLocation();
	const history = useHistory();
	const isLogin = location.pathname === LOGIN_ROUTE;

	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [univer, setUniver] = useState('');
	const [groupUni, setGroupUni] = useState('');
	const [password, setPassword] = useState('');

	const click = async () => {
		try {
			let data;
			if (isLogin) {
				data = await login(email, password);
			} else {
				data = await registration(
					email,
					password,
					firstName,
					lastName,
					univer,
					groupUni
				);
			}
			student.setUser(student);
			student.setName(data);
			student.setInfo(data);
			student.setIsAuth(true);
			history.push(PROFILE_ROUTE);
		} catch (error) {
			// console.log(error, 'error');
			message.error(error.response.data.message);
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<WrapperForm>
			<BackgroundImage src='/image/page-auth/background/background_image_rgo.jpg' />
			<BodyForm
				layout='vertical'
				style={isLogin ? { top: '20%' } : { top: '15px' }}
			>
				<HeaderTitle className='center'>
					{isLogin ? 'Авторизация' : 'Регистрация'}
				</HeaderTitle>
				<StyledFormItem>
					Логин
					<Input
						size='large'
						placeholder='Введите логин'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</StyledFormItem>
				{!isLogin && (
					<>
						<StyledFormItem>
							Имя
							<Input
								size='large'
								placeholder='Введите имя'
								value={firstName}
								onChange={e => setFirstName(e.target.value)}
							/>
						</StyledFormItem>
						<StyledFormItem>
							Фамилия
							<Input
								size='large'
								placeholder='Введите фамилию'
								value={lastName}
								onChange={e => setLastName(e.target.value)}
							/>
						</StyledFormItem>
						<StyledFormItem>
							Университет
							<Input
								size='large'
								placeholder='Введите свой университет'
								value={univer}
								onChange={e => setUniver(e.target.value)}
							/>
						</StyledFormItem>
						<StyledFormItem>
							Группа
							<Input
								size='large'
								placeholder='Введите свою группу'
								value={groupUni}
								onChange={e => setGroupUni(e.target.value)}
							/>
						</StyledFormItem>
					</>
				)}
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
