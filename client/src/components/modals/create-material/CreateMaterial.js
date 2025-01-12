import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../..';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

import { observer } from 'mobx-react-lite';
import { Button, Dropdown, Form, Input, Modal, Space } from 'antd';
import './CreateMaterial.css';
import {
	createMaterial,
	fetchMaterial,
	fetchSection,
} from '../../../http/sectionAPI';

const CreateMaterial = observer(({ open, onOk, onCancel }) => {
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
		});
		// .then(data => onHide());
	};

	const handleMenuClick = e => {
		// message.info('Click on menu item.');
		console.log('click', e);
	};
	const items = [
		{
			label: '1st menu item',
			key: '1',
			icon: <UserOutlined />,
		},
		{
			label: '2nd menu item',
			key: '2',
			icon: <UserOutlined />,
		},
		{
			label: '3rd menu item',
			key: '3',
			icon: <UserOutlined />,
			danger: true,
		},
		{
			label: '4rd menu item',
			key: '4',
			icon: <UserOutlined />,
			danger: true,
			disabled: true,
		},
	];
	const menuProps = {
		items,
		onClick: handleMenuClick,
	};

	return (
		<Modal
			title='Добавить новый материал'
			open={open}
			onOk={onOk}
			onCancel={onCancel}
		>
			<Form
				className='form-section'
				autoComplete='off'
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 20 }}
				initialValues={{ remember: true }}
			>
				<Dropdown menu={menuProps}>
					<Button>
						<Space>
							Button
							<DownOutlined />
						</Space>
					</Button>
				</Dropdown>
				<Form.Item label='Материал' name='section'>
					<Input placeholder='Введите новое название материала' />
				</Form.Item>
				<Form.Item label='Ссылка' name='link'>
					<Input placeholder='Введите ссылку на материал' />
				</Form.Item>
			</Form>
		</Modal>
	);
});

export default CreateMaterial;
