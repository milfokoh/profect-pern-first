import { MehTwoTone } from '@ant-design/icons';
import { Avatar, Col, Progress, Row } from 'antd';
import { COURSE_ROUTE, HOME_ROUTE } from '../../utils/consts';

import './ProfilePage.css';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Card, Layout } from '@app/../UI';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../..';
import { check } from '../../http/userAPI';
import { fetchOneQuiz } from '../../http/studentAPI';

const ProfilePage = observer(() => {
	const history = useHistory();
	const { student } = useContext(Context);
	const [infoStudent, setInfoStudent] = useState({
		name: 'Фамилия Имя',
		info: 'Универ / Группа',
	});
	const [ratingStudent, setRatingStudent] = useState(0);

	const fetchDataOneQuiz = async () => {
		try {
			const data = await fetchOneQuiz(student.studentId);
			const rating = data.rating * 10;
			console.log(data.rating);
			setRatingStudent(rating);
		} catch (error) {
			console.error('Ошибка при получении рейтинга студента:', error);
		}
	};

	useEffect(() => {
		const authenticateUser = async () => {
			try {
				const data = await check();
				if (data.role === 'STUDENT') {
					setInfoStudent(() => ({
						name: student.name,
						info: student.info,
					}));
				}
			} catch (error) {
				console.log('[ProfilePage.js] void check():', error);
			}
		};
		authenticateUser();
	}, []);

	useEffect(() => {
		fetchDataOneQuiz();
	}, []);

	return (
		<Layout className='body-wrapper'>
			<Card>
				<Card className='card-avatar'>
					<Row className='name'>
						<Col className='col-avatar'>
							<Avatar size={200} icon={<MehTwoTone />} />
							<h2 className='col-name'>
								{student.isAuth ? infoStudent.name : 'Вы не вошли в аккаунт?'}
							</h2>
							<h5 className='col-grp'>
								{student.isAuth ? infoStudent.info : 'Необходимо это исправить'}
							</h5>
						</Col>
					</Row>
				</Card>
				<Row className='bio'>
					<Col span={8}>
						<Card
							className='card-progress'
							onClick={() => history.push(COURSE_ROUTE)}
						>
							<h4 className='progress-name'>География</h4>
							<Progress
								percent={student.isAuth ? ratingStudent : 0}
								size={[undefined, 20]}
							/>
							{student.isAuth ? (
								<small>Вам доступен данный курс для прохождения</small>
							) : (
								<small>Даже без авторизации вам доступен данный курс</small>
							)}
						</Card>
					</Col>
				</Row>
			</Card>
		</Layout>
	);
});

export default ProfilePage;
