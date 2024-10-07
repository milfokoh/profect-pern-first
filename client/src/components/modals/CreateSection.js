import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import './style.css';
import { createSection } from '../../http/sectionAPI';

const CreateSection = ({ show, onHide }) => {
	const [section, setSection] = useState('');

	const addSection = () => {
		createSection({ name: section }).then(data => setSection(''));
		onHide();
	};

	return (
		<Modal show={show} onHide={onHide} size='lg' centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					Добавить новый раздел
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control
						value={section}
						onChange={e => setSection(e.target.value)}
						className='mar-top'
						placeholder='Введите название раздела'
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button className='btn' onClick={onHide}>
					Закрыть
				</Button>
				<Button className='btn' onClick={addSection}>
					Добавить
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CreateSection;
