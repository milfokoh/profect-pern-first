import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneSection } from '../http/sectionAPI';
import { Spinner } from 'react-bootstrap';

const SectionPage = () => {
	const [section, setSection] = useState({ info: [] });
	const { id } = useParams();

	useEffect(() => {
		fetchOneSection(id).then(data => setSection(data));
	}, []);

	return (
		<div className='section-item-body'>
			<div className='section-item-chpt' key={section.id}>
				{section.name}
				{section.info.map((info, index) => (
					<div className='section-item-title' key={info.id}>
						{info.title}
						<div className='section-item-cont'>{info.content}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SectionPage;
