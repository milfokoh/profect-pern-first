import React, { useState } from 'react';
import { Form, Input, InputNumber, Modal } from 'antd';
import './style.css';
import { createSection } from '../../http/sectionAPI';
import { observer } from 'mobx-react-lite';

const CreateSection = observer(({ open, onOk, onCancel }) => {
	const [section, setSection] = useState('');

	const addSection = () => {
		createSection({ name: section }).then(data => setSection(''));
		onCancel();
	};

	return (
		<Modal title='Добавить новый раздел' open={open} onOk={onOk} onCancel={onCancel}>
			{/* info: Существует ситуация, когда использование <Modal /> с Form не очистит значение поля при закрытии Modal, даже если вы установили destroyOnClose. В этом случае вам нужно <Form preserve={false} />.  */}
			<Form className='form-section'>
				<Form.Item label='Раздел' name='section'>
					<Input placeholder='Введите новое название раздела' />
				</Form.Item>
			</Form>
		</Modal>
	);
});

export default CreateSection;
