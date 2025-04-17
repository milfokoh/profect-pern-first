import React, { useContext, useEffect } from 'react';
import { Layout } from 'antd';
import './HomeContent.css';
import { Context } from '../..';
import { fetchMaterial, fetchSection } from '../../http/sectionAPI';
import { observer } from 'mobx-react-lite';
import SectionList from '../../components/secList/SectionList';

const { Content } = Layout;

const HomeContent = observer(() => {
	const { section } = useContext(Context);

	useEffect(() => {
		fetchSection().then(data => section.setSection(data));
		fetchMaterial().then(data => section.setMaterials(data.rows));
		window.scrollTo(0, 0);
	}, []);

	return (
		<Content className='content'>
			<SectionList
				section={section}
				key={section.id}
				materials={section.materials}
			/>
		</Content>
	);
});

export default HomeContent;
