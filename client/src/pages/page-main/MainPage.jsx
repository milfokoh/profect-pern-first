import React, { useContext, useEffect } from 'react';
import { Button, Col, Layout, Row, Space } from 'antd';
import './MainPage.css';
import { Context } from '../..';
import { fetchMaterial, fetchSection } from '../../http/sectionAPI';
import { observer } from 'mobx-react-lite';
import SectionList from '../../components/secList/SectionList';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { ArrowRightOutlined } from '@ant-design/icons';
import { COURSE_ROUTE } from '../../utils/consts';

const { Content } = Layout;

const MainPage = observer(() => {
	const { section } = useContext(Context);
	const history = useHistory();

	useEffect(() => {
		fetchSection().then(data => section.setSection(data));
		fetchMaterial().then(data => section.setMaterials(data.rows));
	}, []);

	return (
		<Content className='content'>
			<Row className='the-label row'>
				<Col className='columns'>col-2</Col>
				<Col className='columns first color right'>
					<b>Образовательный онлайн курс</b>
					<br /> по Географии
				</Col>
				<Col className='columns'>по Географии</Col>
				<Col className='columns right'>
					<Button
						className='lets-start'
						icon={<ArrowRightOutlined />}
						iconPosition='end'
						onClick={() => history.push(COURSE_ROUTE)}
					>
						Начать изучение
					</Button>
				</Col>
			</Row>
			<Row className='the-info row space-top'>
				<Col span={4} push={1}>
					<b>Содержание курса</b>
				</Col>
				<Col span={2} push={0} className='bio-course'>
					<p>
						Курс по географии предлагает студентам увлекательное путешествие по
						различным аспектам географии, включая физическую, человеческую и
						экономическую географию. Студенты изучат, как природные процессы и
						человеческая деятельность формируют нашу планету, а также как
						географические факторы влияют на культуру, экономику и политику.
					</p>
				</Col>
				<Col span={1} push={1}></Col>
				<Col span={2} push={0}></Col>
			</Row>
			{/* <Row>
				<Col span={8}>Колонка 1 (8/24)</Col>
				<Col span={8}>Колонка 2 (8/24)</Col>
				<Col span={8}>Колонка 3 (8/24)</Col>
				<Col span={8}>Колонка 4 (8/24)</Col>
				<Col span={8}>Колонка 5 (8/24)</Col>
			</Row> */}
		</Content>
	);
});

export default MainPage;
