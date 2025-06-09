import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneSection } from '../../http/sectionAPI';
import './SectionContent.css';
import { Divider, Layout } from '@app/../UI';
import { Context } from '../../index';
import { Quiz } from '@app/../components';

const SectionContent = () => {
	const [section, setSection] = useState({ info: [] });
	const { student } = useContext(Context);
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
					<div
						className='oth'
						dangerouslySetInnerHTML={{ __html: info.content }}
					/>
				</Layout>
			))}
			{student.isAuth && (
				<Quiz section={section.id} studentId={student.studentId} />
			)}
		</Layout>
	);
};

export default SectionContent;
