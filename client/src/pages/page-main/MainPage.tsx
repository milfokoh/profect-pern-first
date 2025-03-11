import { FC, useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

import { Col, Flex, Layout, Row } from 'antd';
import { Divider, Collapse, FigureImage } from '@app/../UI';
import { modul, fact } from '@app/../cms';
import { TMainPage } from './MainPage.types.js';
import {
	SectionConteiner,
	StyledLayout,
	StyledTitle,
	StyledTitleContainer,
	StyledSection,
	StyledBackgroundImage,
	ContainerGrid,
	StyledText,
	InfoBlock,
	HeadContainer,
	Head,
	HeaderDecription,
	GalleryImageConteiner,
	Description,
	LinkRGO,
	StyledTitleRGO,
	ContainerRGO,
	GalleryContainer,
	InfoRGOConteiner,
	InfoBlockRGO,
	AboutCourse,
	ImageStyled,
	PrologCourse,
	CourseContent,
	HeadTitle,
	StyledGalleryImage,
	StyledImage,
	StyledTextRGO,
	Note,
	StyledDivider,
} from './MainPage.styled.ts';

const { Content } = Layout;

const MainPage: FC<TMainPage> = observer(() => {
	const history = useHistory();

	return (
		<div className='content'>
			<FigureImage
				title='Образовательный курс по географии'
				image='/image/page-main/background/spare-back-3.jpg'
			/>
			<Divider />
			<InfoBlock>
				<ContainerGrid>
					<HeadContainer>
						<Head>
							<StyledTitle>Готовы исследовать мир?</StyledTitle>
						</Head>
						<HeaderDecription>
							<StyledText>
								География — это путешествие сквозь пространство и время.
								Откройте для себя мир: от горных вершин до океанских глубин!
							</StyledText>
							<AboutCourse>
								<StyledImage
									src='https://geografia.ru/wp-content/themes/itbutik3/img/otziv.svg'
									alt='contects'
								/>
								<PrologCourse>
									Курс по географии предлагает студентам увлекательное
									путешествие по различным аспектам географии, включая
									физическую, человеческую и экономическую географию. Студенты
									изучат, как природные процессы и человеческая деятельность
									формируют нашу планету, а также как географические факторы
									влияют на культуру и экономику.
								</PrologCourse>
							</AboutCourse>
						</HeaderDecription>
					</HeadContainer>
				</ContainerGrid>
			</InfoBlock>
			<Divider />
			<CourseContent>
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
				<StyledBackgroundImage src='/image/page-main/icon/planet.svg' />
			</CourseContent>

			<Divider />

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
			<ContainerRGO>
				<Head>
					<HeadTitle>Дополнительные ссылки</HeadTitle>
				</Head>
				<InfoBlockRGO>
					<GalleryContainer>
						<StyledGalleryImage />
					</GalleryContainer>
					<InfoRGOConteiner>
						<Head>
							<StyledTitleRGO href='https://rgo.ru/'>
								Открываем Россию заново. Вместе
							</StyledTitleRGO>
						</Head>
						<StyledTextRGO>
							Туры и экспедиции, акции и конкурсы, интервью и новости — всё, чем
							живёт Русское географическое общество, на этом сайте.
						</StyledTextRGO>
						<StyledDivider />
						<Note>Русское географическое общество</Note>
					</InfoRGOConteiner>
				</InfoBlockRGO>
			</ContainerRGO>
			<Divider />
		</div>
	);
});

export default MainPage;
