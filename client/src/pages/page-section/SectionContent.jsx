import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneSection } from '../../http/sectionAPI';
import './SectionContent.css';
import { Divider, Layout } from '@app/../UI';

const SectionContent = () => {
	const [section, setSection] = useState({ info: [] });
	const { id } = useParams();

	useEffect(() => {
		fetchOneSection(id).then(data => setSection(data));
		window.scrollTo(0, 0);
	}, []);

	return (
		<Layout className='body-wrapper'>
			<h3 orientation='left' key={section.id}>
				{section.name}
			</h3>
			{section.info.map(info => (
				<Layout key={info.id}>
					<Divider key={info.id}>{info.title}</Divider>
					<p>{info.content}</p>
				</Layout>
			))}
		</Layout>
	);
};

export default SectionContent;
