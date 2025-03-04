import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	overflow: hidden;
	margin-bottom: 50px;
	display: block;
	padding: 0;
`;

export const Header = styled.div`
	position: absolute;
	display: flex;
	text-align: right;
	max-width: 700px;
	padding: 20px;
	background-color: rgba(255, 255, 255, 0.22);
	border-radius: 5px;
	z-index: 0;
	top: 20%;
	right: 10%;
`;

export const Headline = styled.h1`
	color: #2c6c8b;
	font-weight: bold;
	font-size: 3rem;
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
	top: calc(30% + 150px);
	right: 10%;
`;

export const StyledButton = styled.button`
	background-color: rgba(255, 255, 255, 0.22);
	font-weight: bold;
	font-size: 1.3rem;
	color: #1f4b61;
	border: 2px solid #1f4b61;
	border-radius: 5px;

	&::before {
		content: 'Начать изучение →';
	}
`;
