import React from 'react';
import { observer } from 'mobx-react-lite';
import './style.css';
import { useHistory } from 'react-router-dom';
import { SECTION_ROUTE } from '../utils/consts';

const SectionItem = observer(({ section, materials }) => {
	const history = useHistory();
	return (
		<div
			className='modul-item-body'
			onClick={() => history.push(SECTION_ROUTE + '/' + section.id)}
		>
			<div className='modil-item-name'>
				<b className='b'>Модуль {section.id}. </b>
				{section.name}
			</div>

			<div className='modul-item-title'>
				{materials &&
					materials
						.filter(mat => mat.sectionId === section.id)
						.map(mat => (
							<div className='card-info' key={mat.id}>
								{mat.title}
							</div>
						))}
			</div>
		</div>
	);
});
export default SectionItem;
