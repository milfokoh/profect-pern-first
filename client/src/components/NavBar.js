import React, { useContext } from 'react';
import { Context } from '..';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { LOGIN_ROUTE } from '../utils/consts';
import { useHistory } from 'react-router-dom';

const NavBar = observer(() => {
	const { user } = useContext(Context);
	const history = useHistory();

	const logOut = () => {
		user.setIsAuth(false);
		user.setUser({});
	};

	return (
		<Navbar bg='light' data-bs-theme='light'>
			<Container>
				<Navbar.Brand href='/homepage'>География</Navbar.Brand>
				{user.isAuth ? (
					<Nav className='ml-auto'>
						<Nav.Link onClick={() => logOut()}>Выйти</Nav.Link>
						<Nav.Link href='/admin'>Админ панель</Nav.Link>
					</Nav>
				) : (
					<Nav className='ml-auto'>
						<Nav.Link onClick={() => history.push(LOGIN_ROUTE)}>
							Авторизация
						</Nav.Link>
					</Nav>
				)}
			</Container>
		</Navbar>
	);
});

export default NavBar;
