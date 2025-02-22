import { useContext, useEffect, useState } from 'react';
import { Button, Col, Row, Table } from 'antd';
import {
	ArrowDownOutlined,
	EditTwoTone,
	PlusOutlined,
} from '@ant-design/icons';
import { fetchSection } from '../../../http/sectionAPI';
import { Context } from '../../..';
import './TableSectionPage.css';
import { CreateMaterial, CreateSection } from '../../../components';
import { Layout } from '@app/../UI';

const columns = [
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'CreatedAt',
		dataIndex: 'createdAt',
		key: 'createdAt',
	},
	{
		title: 'UpdatedAt',
		dataIndex: 'updatedAt',
		key: 'updatedAt',
	},
	{
		title: 'Action',
		dataIndex: '',
		key: 'x',
		render: () => (
			<Button>
				Edit <EditTwoTone />
			</Button>
		),
	},
];

const headerTable = ({ showModal }) => {
	return (
		<Row>
			<Col className='first col'>
				<h3>Таблица разделов</h3>
			</Col>
			<Col className='second col'>
				<Button
					type='primary'
					className='btn-functionsl'
					icon={<PlusOutlined />}
					//TODO: onClick={} прицепить модальное окно
					onClick={showModal}
				>
					Добавить
				</Button>
				<Button
					type='primary'
					className='btn-functionsl'
					icon={<ArrowDownOutlined />}
					//TODO: выгружать в формате эксель
				>
					Выгрузить
				</Button>
			</Col>
		</Row>
	);
};

const TableSectionPage = () => {
	const { section } = useContext(Context);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		fetchSection().then(data => section.setSection(data));
	}, []);

	const data = section.section.map((item, index) => ({ ...item, key: index }));

	return (
		<Layout className='body-wrapper'>
			<Table
				rowSelection={{
					type: 'checkbox',
				}}
				columns={columns}
				dataSource={data}
				title={() => headerTable({ showModal })}
			/>
			<CreateMaterial
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			/>
			{/* <CreateSection
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			/> */}
		</Layout>
	);
};
export default TableSectionPage;
