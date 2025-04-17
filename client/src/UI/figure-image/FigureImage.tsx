import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { TFigureImage } from './FigureImage.types';

import { COURSE_ROUTE } from '@app/../utils/consts';

import {
	Headline,
	Header,
	Wrapper,
	BackgroundImage,
	ButtonWrapper,
	StyledButton,
} from './FigureImage.styled';

const FigureImage: FC<TFigureImage> = ({ title, image }) => {
	const history = useHistory();

	return (
		<Wrapper>
			<BackgroundImage src={image} />
			<Header>
				<Headline>{title}</Headline>
			</Header>
			<ButtonWrapper>
				<StyledButton onClick={() => history.push(COURSE_ROUTE)} />
			</ButtonWrapper>
		</Wrapper>
	);
};

export default FigureImage;
