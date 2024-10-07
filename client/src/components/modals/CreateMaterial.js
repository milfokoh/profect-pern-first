import React, { useContext, useEffect, useState } from 'react';
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { Context } from '../..';
import './style.css';
import {
	createMaterial,
	fetchMaterial,
	fetchSection,
} from '../../http/sectionAPI';
import { observer } from 'mobx-react-lite';

const CreateMaterial = observer(({ show, onHide }) => {
	const { section } = useContext(Context);

	useEffect(() => {
		fetchSection().then(data => section.setSection(data));
		fetchMaterial().then(data => section.setMaterials(data.rows));
	}, []);

	const [name, setName] = useState('');
	const [link, setLink] = useState('');

	const addMaterial = () => {
		createMaterial({
			title: name,
			content: link,
			sectionId: section.selectedSec.id,
		}).then(data => onHide());
	};

	return (
		<Modal show={show} onHide={onHide} size='lg' centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					Добавить новый материал
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='mdl-body'>
				<Form>
					<Dropdown className='drop-menu'>
						<Dropdown.Toggle className='drop-toggle'>
							{section.selectedSec.name || 'Выберите раздел'}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{section.section.map(sec => (
								<Dropdown.Item
									key={sec.id}
									onClick={() => {
										section.setSelectedSec(sec);
									}}
								>
									{sec.name}
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control
						value={name}
						onChange={e => setName(e.target.value)}
						className='mar-top'
						placeholder='Введите название параграфа'
					/>

					<Form.Control
						value={link}
						onChange={e => setLink(e.target.value)}
						className='mar-top'
						placeholder='Введите ссылку на конент'
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button className='btn' onClick={onHide}>
					Закрыть
				</Button>
				<Button className='btn' onClick={addMaterial}>
					Добавить
				</Button>
			</Modal.Footer>
		</Modal>
	);
});

export default CreateMaterial;
