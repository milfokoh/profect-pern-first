import styled from 'styled-components';
import Button from '../button';

export const StyledButton = styled(Button)`
	position: fixed;
	bottom: 20px;
	right: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;

	&:where(.css-dev-only-do-not-override-ccdg5a).ant-btn.ant-btn-icon-only {
		width: 50px;
		height: 50px;
	}
`;
