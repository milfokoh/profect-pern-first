import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, message, Modal } from 'antd';
import './CreateSection.css';
import { observer } from 'mobx-react-lite';
import { createSection } from '../../../http/sectionAPI';

const CreateSection = observer(({ open, setIsModalOpen, onCancel }) => {
	const [section, setSection] = useState('');

	const addSection = () => {
		createSection({ name: section });
		message.success('Ваш раздел добавлен');
		setIsModalOpen(false);
	};

	return (
		<Modal
			title='Добавить новый раздел'
			open={open}
			onCancel={onCancel}
			footer={null}
		>
			{/* info: Существует ситуация, когда использование <Modal /> с Form не очистит значение поля при закрытии Modal, даже если вы установили destroyOnClose. В этом случае вам нужно <Form preserve={false} />.  */}
			<Form className='form-section'>
				<Form.Item label='Раздел' name='section'>
					<Input
						placeholder='Введите новое название раздела'
						onChange={e => setSection(e.target.value)}
					/>
				</Form.Item>
			</Form>
			<Button className='sbm-btnn' color='default' onClick={addSection}>
				Добавить
			</Button>
		</Modal>
	);
});

export default CreateSection;
