import styled from 'styled-components';

import { TrophyOutlined } from '@ant-design/icons';

import { COLOR } from '@app/../constant';

export const QuizWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 10px;
	background: ${COLOR.backgroundWhite};
	border-radius: 10px;
	box-shadow: 0 4px 12px ${COLOR.lightBlue};
	overflow: hidden;
`;

export const QuizBluriWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(255, 255, 255, 0.5);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	border-radius: 10px;
	pointer-events: none;
	z-index: 30;
	transition: backdrop-filter 0.3s ease, background 0.3s ease;
	align-content: center;
	justify-items: center;
`;

export const BlurTitleWrapper = styled.div`
	max-width: 300px;
	height: auto;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border-radius: 10px;
	border: 1px solid ${COLOR.lightBlue};

	@media (max-width: 538px) {
		width: 250px;
	}
`;

export const StyledTrophyOutlined = styled(TrophyOutlined)`
	font-size: 7rem;
	align-self: center;
	color: ${COLOR.textPrimary};

	@media (max-width: 538px) {
		& svg {
			font-size: 5rem;
		}
	}
`;

export const BlurTitleText = styled.p`
	font-size: 2rem;
	color: ${COLOR.textPrimary};

	@media (max-width: 538px) {
		font-size: 1.4rem;
	}
`;

export const QuizTitleWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export const QuizTitle = styled.h2`
	text-align: center;
	color: ${COLOR.darkBlue};

	@media (max-width: 538px) {
		font-size: 1.5rem;
	}
`;

export const QuizBodyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;
	border: 1px solid ${COLOR.lightBlue};
	border-radius: 10px;
	padding: 10px;
	gap: 3px;
`;

export const QuizQuestions = styled.p`
	padding: 0;
	margin: 0;
	font-weight: bold;
	color: ${COLOR.textPrimary};

	@media (max-width: 538px) {
		font-size: 1rem;
	}
`;

export const QuizOptionsWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const QuizOptWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

export const QuizAnswer = styled.label`
	display: flex;
	flex-direction: row;
	gap: 10px;
	cursor: pointer;
	margin-bottom: 2px;
	color: ${COLOR.textPrimary};

	@media (max-width: 538px) {
		font-size: 0.9rem;
	}
`;

export const QuizInputAnswer = styled.input``;

export const QuizButton = styled.button`
	max-width: 250px;
	height: 35px;
	border: 2px solid ${COLOR.lightBlue};
	border-radius: 10px;
	background-color: ${COLOR.backgroundColorWhite};

	& span {
		color: ${COLOR.textPrimary};
		font-weight: bold;
		font-size: 1rem;
	}

	@media (max-width: 538px) {
		align-self: center;
		width: 100%;
	}
`;
