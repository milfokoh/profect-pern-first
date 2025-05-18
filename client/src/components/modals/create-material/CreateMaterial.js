import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../..';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

import { observer } from 'mobx-react-lite';
import { Button, Dropdown, Form, Input, message, Modal, Space } from 'antd';
import './CreateMaterial.css';
import {
	createMaterial,
	fetchMaterial,
	fetchSection,
} from '../../../http/sectionAPI';

const CreateMaterial = observer(({ open, setIsModalOpen, onCancel }) => {
	const { section } = useContext(Context);
	const [name, setName] = useState('');
	const [sectionTitleId, setSectionTitleId] = useState(0);
	const [code, setCode] = useState('');
	const [dataFetch, setDataFetch] = useState([]);
	const [selectedItem, setSelectedItem] = useState('Раздел');

	useEffect(() => {
		fetchSection().then(data => section.setSection(data));
		fetchMaterial().then(data => section.setMaterials(data.rows));
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchSection();
				setDataFetch(data);
			} catch (error) {
				console.error('Ошибка при получении материалов:', error);
			}
		};
		fetchData();
	}, []);

	const addMaterial = () => {
		createMaterial({
			title: name,
			content: code,
			sectionId: sectionTitleId,
		});
		message.success('Новый материал добавлен');
		setIsModalOpen(false);
	};

	const handleMenuClick = e => {
		const selected = items.find(item => item.key === e.key);
		if (selected) {
			setSelectedItem(selected.label);
			setSectionTitleId(selected.key);
		}
	};

	const items = dataFetch.map(item => ({
		label: item.name,
		key: item.id.toString(),
	}));

	const menuProps = {
		items,
		onClick: handleMenuClick,
	};

	return (
		<Modal
			title='Добавить новый материал'
			open={open}
			onCancel={onCancel}
			footer={null}
		>
			<Form
				className='form-section'
				autoComplete='off'
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 20 }}
				initialValues={{ remember: true }}
			>
				<Form.Item label='Тема' name='section'>
					<Input
						placeholder='Введите название новогой темы'
						onChange={e => setName(e.target.value)}
					/>
				</Form.Item>
				<Form.Item label='Код' name='link'>
					<Input
						placeholder='Введите текст кода'
						onChange={e => setCode(e.target.value)}
					/>
				</Form.Item>

				<div className='wrapper-list'>
					<span>Тема раздела: </span>
					<Dropdown menu={menuProps} className='drop-list'>
						<Button>
							<Space>
								{selectedItem}
								<DownOutlined />
							</Space>
						</Button>
					</Dropdown>
				</div>
			</Form>
			<Button className='sbm-btnn' color='default' onClick={addMaterial}>
				Добавить
			</Button>
		</Modal>
	);
});

export default CreateMaterial;
