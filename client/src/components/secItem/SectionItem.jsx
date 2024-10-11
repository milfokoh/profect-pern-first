import React from 'react';
import './SectionItem.css';
import { useHistory } from 'react-router-dom';
import { SECTION_ROUTE } from '../../utils/consts';
import { Card } from 'antd';
import { observer } from 'mobx-react-lite';

const SectionItem = observer(({ section, materials }) => {
	const history = useHistory();
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
});

export default SectionItem;
