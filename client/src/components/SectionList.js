import React from 'react';
import { observer } from 'mobx-react-lite';
import SectionItem from './SectionItem';
import './style.css';

const SectionList = observer(({ section, materials }) => {
	return (
		<div className='wrapper-section-list'>
			{section.section.map(sec => (
				<SectionItem key={sec.id} section={sec} materials={materials} />
			))}
		</div>
	);
});

export default SectionList;
