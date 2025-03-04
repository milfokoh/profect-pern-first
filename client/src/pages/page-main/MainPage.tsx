import { FC, useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

import { Col, Flex, Layout, Row } from 'antd';
import { Divider, Collapse, FigureImage, Section } from '@app/../UI';
import { modul, fact } from '@app/../cms';
import { TMainPage } from './MainPage.types.js';
import {
	SectionConteiner,
	StyledLayout,
	Container,
	StyledTitle,
	StyledTitleContainer,
	StyledSection,
	StyledBackgroundImage,
} from './MainPage.styled.ts';

const { Content } = Layout;

const MainPage: FC<TMainPage> = observer(() => {
	const history = useHistory();

	return (
		<div className='content'>
			<FigureImage
				title='Образовательный онлайн курс по географии'
				image='/image/page-main/background/main-back-min.png'
			/>
			<SectionConteiner>
				{fact.map((data, index) => (
					<Section
						title={data.title}
						image={data.image}
						description={data.description}
						key={index}
					></Section>
				))}
			</SectionConteiner>

			{/* <Flex className='the-info space-top border'>
				<Col span={6}>
					<p className='col-info'>Содержание курса</p>
				</Col>
				<Row>
					<Col span={24}>
						<p className='col-header border'>
							Курс по географии предлагает студентам увлекательное путешествие
							по различным аспектам географии, включая физическую, человеческую
							и экономическую географию. Студенты изучат, как природные процессы
							и человеческая деятельность формируют нашу планету, а также как
							географические факторы влияют на культуру и экономику.
						</p>
					</Col>
					<Col span={12} className='bio-course border center'>
						<p>Содержание культуру</p>
					</Col>
					<Col span={12} className='bio-course border center'>
						<p>
							Курс по географии предлагает студентам увлекательное путешествие
							по различным аспектам географии, включая физическую, человеческую
							и экономическую географию. Студенты изучат, как природные процессы
							и человеческая деятельность формируют нашу планету, а также как
							географические факторы влияют на культуру и экономику.
						</p>
					</Col>
					<Col span={12} className='img-back-fir'>
						image
					</Col>
					<Col span={12} className='img-back-sec'>
						image
					</Col>
				</Row>
			</Flex> */}
			<Divider />
			<Container>
				<StyledLayout>
					<StyledTitleContainer>
						<StyledTitle>Содержание курса</StyledTitle>
					</StyledTitleContainer>
					{modul.map((data, index) => (
						<Collapse
							title={data.title}
							description={data.description}
							key={index}
						></Collapse>
					))}
				</StyledLayout>
				<StyledSection
					title='Леса'
					image='/image/page-main/icon/tree.svg'
					description='Территории России, покрытые лесной растительностью. Площадь лесов России составляет около 809 млн га (8,09 млн км²), или около 20 % от всех лесов мира.Большинство лесов страны занято хвойными породами деревьев.'
				/>
				<StyledBackgroundImage src='/image/page-main/icon/planet.svg' />
			</Container>
		</div>
	);
});

export default MainPage;
