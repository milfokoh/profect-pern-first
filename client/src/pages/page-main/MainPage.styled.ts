import styled, { keyframes } from 'styled-components';

import { Layout, Section, GalleryImage, Divider } from '@app/../UI';
import { COLOR } from '@app/../constant';

export const ContainerRGO = styled(Layout)`
	display: grid;
	gap: 20px;
`;

export const InfoBlock = styled.div`
	display: flex;
	justify-content: center;
	padding: 30px;
	background-color: ${COLOR.backgroundColorWhite};
`;

export const GalleryImageConteiner = styled.div`
	display: grid;
	// background-color: white;
	// border-radius: 20px;
`;

export const InfoBlockRGO = styled.div`
	display: flex;
	align-items: center;
	padding: 20px;
`;

export const GalleryContainer = styled.div`
	width: 70%;
`;

export const StyledGalleryImage = styled(GalleryImage)`
	width: 100%;
	scale: 1.5;
`;

export const CollapseContent = styled.div`
	padding-left: 20px;
	margin-top: 0;
`;

export const InfoRGOConteiner = styled.div`
	width: 30%;
	max-height: 400px;
	padding: 20px;
	background-color: ${COLOR.lightBlue};
	border-radius: 20px;
	color: ${COLOR.textWhite};
`;

export const StyledTextRGO = styled.p`
	padding-block: 10px;

	font-size: 1.2rem;
	color: ${COLOR.textWhite};
`;

export const Note = styled.p`
	font-size: 0.8rem;
	margin-bottom: 0;
	padding-bottom: 0;
`;

export const StyledDivider = styled(Divider)`
	padding: 0;
	margin: 0;
`;

export const Description = styled.div`
	padding-bottom: 10px;
	padding-left: 50px;
`;

export const LinkRGO = styled.a`
	color: ${COLOR.textPrimary};
	font-size: 1.1rem;
`;

export const StyledTitleRGO = styled.a`
	padding-block: 10px;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 2.3rem;
	// text-align: center;
	color: ${COLOR.textPrimary};

	&:hover {
		color: ${COLOR.darkBlue};
	}
`;

export const CourseContent = styled.div`
	display: flex;
`;

export const StyledLayout = styled.div`
	width: 60vw;
	display: flex;
	flex-direction: column;
	gap: 10px;
	border-radius: 20px;
	padding: 20px;
	margin-inline: 20px;
	background-color: white;
	grid-area: list;
`;

export const StyledTitleContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 30px;
`;

export const ContainerGrid = styled.div`
	display: grid;
	max-width: 50%;
`;

export const HeadContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Head = styled.div`
	display: flex;
	justify-content: center;
`;

export const HeadTitle = styled.h1`
	color: ${COLOR.textPrimary};
`;

export const HeaderDecription = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	margin: 30px 0;
`;

export const StyledTitle = styled.h1`
	text-transform: uppercase;
	font-weight: bold;
	font-size: 3rem;
	text-align: center;
	color: ${COLOR.textPrimary};
`;

export const StyledText = styled.p`
	font-size: 1.2rem;
	color: ${COLOR.textPrimary};
`;

export const AboutCourse = styled.div`
	display: flex;
	gap: 20px;
	padding: 30px;
	border-radius: 10px;
	background: ${COLOR.lightBlue};
	// background-image: url('https://rgo.ru/upload/content_block/images/8dd887d9be55bd54353c1be756530d4b/676fd70333714fc46960f0067349360a1.jpg');
	// background-size: cover;
	// background-position: center;
	box-shadow: 0 1px 5px rgba(74, 94, 122, 0.3);
	align-items: flex-start;
`;

export const PrologCourse = styled.p`
	font-size: 1.4rem;
	color: ${COLOR.textWhite};
`;

export const StyledImage = styled.img``;

export const SectionConteiner = styled.div`
	padding-inline: 20px;
	display: flex;
	justify-content: space-evenly;
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

export const StyledBackgroundImage = styled.img`
	max-width: 520px;
	// animation: ${pulseAnimation} 5s infinite;
`;

export const StyledSection = styled(Section)`
	grid-area: section;
`;
