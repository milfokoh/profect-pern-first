import { FC, useState } from 'react';

import {
	CollapseDescription,
	CollapseHeaderContainer,
	CollapseHeaderWrapper,
	CollapseTitle,
	CollapseIcon,
} from './Collapse.styled';
import { TCollapseProps } from './Collapse.types';

const Collapse: FC<TCollapseProps> = ({ title, description }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleToggle = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<CollapseHeaderWrapper isExpanded={isExpanded}>
			<CollapseHeaderContainer>
				<CollapseTitle>{title}</CollapseTitle>
				<CollapseIcon onClick={handleToggle} isExpanded={isExpanded} />
			</CollapseHeaderContainer>
			{isExpanded && <CollapseDescription>{description}</CollapseDescription>}
		</CollapseHeaderWrapper>
	);
};

export default Collapse;
