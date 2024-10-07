import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchMaterial, fetchSection } from '../http/sectionAPI';
import SectionPage from './SectionPage';
import SectionList from '../components/SectionList';

const HomePage = observer(() => {
	const { section } = useContext(Context);

	useEffect(() => {
		fetchSection().then(data => section.setSection(data));
		fetchMaterial().then(data => section.setMaterials(data.rows));
	}, []);

	return (
		<Container className='home-cont'>
			<Row className='row-home'>
				<Col>
					<SectionList
						section={section}
						key={section.id}
						materials={section.materials}
					/>
				</Col>
			</Row>
		</Container>
	);
});

export default HomePage;
