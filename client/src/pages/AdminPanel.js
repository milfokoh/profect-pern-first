import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateMaterial from '../components/modals/CreateMaterial';
import CreateSection from '../components/modals/CreateSection';

const AdminPage = () => {
	const [sectionVisible, setSectionVisible] = useState(false);
	const [materialVisible, setMaterialVisible] = useState(false);

	return (
		<Container className='home-cont cont-admin'>
			<Button className='btn' onClick={() => setSectionVisible(true)}>
				Добавить разделы
			</Button>
			<Button className='btn' onClick={() => setMaterialVisible(true)}>
				Добавить материалы
			</Button>
			<CreateSection
				show={sectionVisible}
				onHide={() => setSectionVisible(false)}
			/>
			<CreateMaterial
				show={materialVisible}
				onHide={() => setMaterialVisible(false)}
			/>
		</Container>
	);
};
export default AdminPage;
