import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { SECTION_ROUTE } from '../../utils/consts';
import './SectionItem.css';
import { Card } from '@app/../UI';

const SectionItem = ({ section, materials }) => {
	const history = useHistory();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Card
			title={` Модуль ${section.id}. ${section.name}`}
			size='small'
			onClick={() => history.push(SECTION_ROUTE + '/' + section.id)}
		>
			{materials &&
				materials
					.filter(mat => mat.sectionId === section.id)
					.map(mat => <p key={mat.id}>{mat.title}</p>)}
		</Card>
	);
};

export default SectionItem;
