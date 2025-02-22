import { FC } from 'react';

import { TDividerProp } from './Divider.types';
import { StyledDivider } from './Divider.styled';

const Divider: FC<TDividerProp> = props => {
	return <StyledDivider {...props} />;
};

export default Divider;
