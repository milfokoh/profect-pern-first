import { FC } from 'react';
import { TButtonProp } from './Button.types';
import { StyledButton } from './Button.styled';

const Button: FC<TButtonProp> = props => {
	return <StyledButton {...props} />;
};

export default Button;
