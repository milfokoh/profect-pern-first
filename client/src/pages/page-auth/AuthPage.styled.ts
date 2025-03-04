import styled from 'styled-components';

import { Layout, Button } from '@app/../UI';
import { Form } from 'antd';

export const WrapperForm = styled(Layout)`
	position: relative;
	overflow: hidden;
	display: block;
	padding: 0;
	height: 100vh;
`;

export const BodyForm = styled(Form)`
	position: relative;
	top: calc(30%);
	width: 500px;
	max-width: 850px;
	max-height: 850px;
	margin: 0 auto;
	padding: 30px;
	border: 2px solid #4a5e7a;
	border-radius: 10px;
	background-color: rgba(74, 94, 122, 0.53);
	color: white;
	z-index: 1;
`;

export const BackgroundImage = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: 0;
`;

export const ButtonSub = styled(Button)`
	width: 100%;
	height: 50px;
	margin-bottom: 0;
	background-color: rgb(0, 21, 41);

	&:hover {
	}
`;
export const HeaderTitle = styled.h2`
	text-align: center;
`;

export const StyledFormItem = styled(Form.Item)``;
