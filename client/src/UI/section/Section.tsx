import { FC } from 'react';
import { TSection } from './Section.types';
import {
	SectionBody,
	SectionContainer,
	SectionDescription,
	SectionHead,
	SectionImage,
	SectionImageContainer,
	StyledDescription,
	Title,
} from './Section.styled';

const Section: FC<TSection> = ({ title, image, description }) => {
	return (
		<SectionContainer>
			<SectionImageContainer>
				<SectionImage src={image} />
			</SectionImageContainer>
			<SectionBody>
				<SectionHead>
					<Title>{title}</Title>
				</SectionHead>
				<SectionDescription>
					<StyledDescription>{description}</StyledDescription>
				</SectionDescription>
			</SectionBody>
		</SectionContainer>
	);
};

export default Section;
