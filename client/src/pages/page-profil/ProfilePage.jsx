import { MehTwoTone } from '@ant-design/icons';
import { Avatar, Card, Col, Flex, Layout, Menu, Progress, Row } from 'antd';
import { HOME_ROUTE } from '../../utils/consts';

import './ProfilePage.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { observer } from 'mobx-react-lite';

const ProfilePage = observer(() => {
	const history = useHistory();
	return (
		<Layout className='body-wrapper'>
			<Card>
				<Card className='card-avatar'>
					<Row className='name'>
						<Col className='col-avatar'>
							<Avatar size={200} icon={<MehTwoTone />} />
							<h2 className='col-name'>Имя Фамилия Отчество</h2>
							<h5 className='col-grp'>Группа / Курс</h5>
						</Col>
					</Row>
				</Card>
				<Row className='bio'>
					<Col span={8}>
						<Card
							className='card-progress'
							onClick={() => history.push(HOME_ROUTE)}
						>
							<h4 className='progress-name'>География</h4>
							<Progress percent={50} size={[undefined, 20]} />
							<small>
								тут можно указать на какое количество дней расчитан курс и
								вычислять в последующем
							</small>
						</Card>
					</Col>
				</Row>
			</Card>
		</Layout>
	);
});

export default ProfilePage;
