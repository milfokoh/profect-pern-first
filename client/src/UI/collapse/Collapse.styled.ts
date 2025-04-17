import styled from 'styled-components';

const THEME_LIGHT = `
   background-color: #EFEFEF;
  color: #2C6C8B;
`;

const THEME_DARK = `
  background: linear-gradient(90deg, #2C6C8B 0%, #1A4D5D 100%), 
  linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  color: #FFFFFF;
`;

export const CollapseHeaderWrapper = styled.div.withConfig({
	shouldForwardProp: prop => !['isExpanded'].includes(prop),
})<{ isExpanded: boolean }>`
	display: flex;
	flex-direction: column;
	justify: space-between;
	gap: 10px;
	border-radius: 20px;

	${({ isExpanded }) => (isExpanded ? THEME_DARK : THEME_LIGHT)}
`;

export const CollapseHeaderContainer = styled.div`
	display: grid;
	grid-template-columns: auto 20px;
	margin: 20px;
	align-items: center;
	gap: 5px;
`;

export const CollapseTitle = styled.h5`
	font-size: 1.2rem;
	font-weight: 400;
	margin: 0;

	@media (max-width: 380px) {
		font-size: 1rem;
	}
`;

export const CollapseDescription = styled.p`
	font-size: 1rem;
	padding: 0 10px 10px;

	@media (max-width: 380px) {
		font-size: 0.8rem;
	}
`;

export const CollapseIcon = styled.button.withConfig({
	shouldForwardProp: prop => !['isExpanded'].includes(prop),
})<{ isExpanded: boolean }>`
	width: 24px;
	height: 24px;
	font-size: 12px;
	border-radius: 12px;
	cursor: pointer;

	${({ isExpanded }) => (isExpanded ? THEME_LIGHT : THEME_DARK)}

	&::before {
		content: '<';
	}

	transition: transform 0.3s ease;
	${({ isExpanded }) => isExpanded && `transform: rotate(-90deg);`}
`;
