import { FC } from 'react';

import { TCardProp } from './Card.types';
import { StyledCard } from './Card.styled';

const Card: FC<TCardProp> = props => {
	return <StyledCard {...props} />;
};

export default Card;
