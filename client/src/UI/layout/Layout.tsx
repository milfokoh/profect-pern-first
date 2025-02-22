import { FC } from 'react';

import { TLayoutProp } from './Layout.types';
import { StyledLayout } from './Layout.styled';

const Layout: FC<TLayoutProp> = props => {
	return <StyledLayout {...props} />;
};

export default Layout;
