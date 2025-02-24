import styled from 'styled-components';

export const SectionContainer = styled.section`
	display: flex;
	flex-direction: column;
	width: 338px;
	height: 338px;
	gap: 30px;
	border-radius: 30px;
	background-color: white;
	padding: 20px;
`;
export const SectionImageContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const SectionImage = styled.img``;

export const SectionBody = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
export const SectionHead = styled.div`
	display: flex;
	justify-content: center;
`;

export const Title = styled.h1`
	font-weight: bold;
	color: #2c6c8b;
`;

export const SectionDescription = styled.div`
	border-radius: 30px;
	padding: 15px;
	background-color: rgba(217, 217, 217, 0.3);
`;
export const StyledDescription = styled.p`
	color: #2c6c8b;
	font-size: 1rem;
`;
