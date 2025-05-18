import { COLOR } from '@app/../constant';
import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	overflow: hidden;
	margin-bottom: 50px;
	display: block;

	@media (max-width: 580px) {
		margin-bottom: 0;
	}
`;

export const Header = styled.div`
	position: absolute;
	display: flex;
	text-align: right;
	max-width: 1200px;
	padding: 20px;
	background-color: rgba(255, 255, 255, 0.22);
	border-radius: 5px;
	z-index: 0;
	top: 20%;
	right: 5%;

	@media (max-width: 580px) {
		top: 0;
		right: 0;
		padding: 5px;
	}
`;

export const Headline = styled.h1`
	color: ${COLOR.textPrimary};
	font-weight: bold;
	font-size: 5rem;

	@media (max-width: 580px) {
		font-size: 1.5rem;
	}
`;

export const BackgroundImage = styled.img`
	width: 100%;
	height: auto;
	z-index: -1;
`;

export const ButtonWrapper = styled.div`
	position: absolute;
	display: flex;
	text-align: right;
	z-index: 0;
	top: calc(30% + 200px);
	right: 5%;

	@media (max-width: 580px) {
		top: 70%;
		right: 0;
	}
`;

export const StyledButton = styled.button`
	background-color: rgba(255, 255, 255, 0.22);
	font-weight: bold;
	font-size: 2rem;
	color: white;
	border: 2px solid rgba(74, 94, 122, 0.84);
	border-radius: 5px;
	padding: 5px;

	&::before {
		content: 'Начать изучение →';
	}

	@media (max-width: 580px) {
		padding: 3px;
		font-size: 0.8rem;
		border: 1px solid rgba(74, 94, 122, 0.84);
	}
`;
