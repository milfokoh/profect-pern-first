import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Divider, Layout } from 'antd';
import { fetchOneSection } from '../../http/sectionAPI';
import './SectionContent.css';

const SectionContent = () => {
	const [section, setSection] = useState({ info: [] });
	const { id } = useParams();

	useEffect(() => {
		fetchOneSection(id).then(data => setSection(data));
	}, []);

	return (
		<Layout className='body-wrapper'>
			<h3 orientation='left' key={section.id}>
				{section.name}
			</h3>
			{section.info.map((info, index) => (
				<Layout key={info.id}>
					<Divider key={info.id}>{info.title}</Divider>
					<p>{info.content}</p>
				</Layout>
			))}
		</Layout>
	);
};

export default SectionContent;
