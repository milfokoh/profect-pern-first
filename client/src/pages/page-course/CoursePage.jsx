import {
	HomeOutlined,
	OrderedListOutlined,
	TeamOutlined,
	UngroupOutlined,
} from '@ant-design/icons';
import { Card, Layout, Menu } from 'antd';
import { HOME_ROUTE } from '../../utils/consts';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './CoursePage.css';

const CoursePage = () => {
	const history = useHistory();

	return (
		<Layout className='body-wrapper'>
			<Card
				type='inner'
				title='Курс географии'
				// extra={<a href={HOME_ROUTE}>ССЫЛКА БУДЕТ </a>}
				onClick={() => history.push(HOME_ROUTE)}
			>
				<h2 className='center'>TODO:</h2>
				<h5>Ответ на вопрос: Что меня ждет на этом курсе?</h5>
				<h5>
					Доработать: Добавить мб содержимое в виде (N-модуль.
					теория)-(тест)-(теория)-(тест по всему модулю)-(N+1-модуль. теория)-
					...
				</h5>
			</Card>
		</Layout>
	);
};

export default CoursePage;
