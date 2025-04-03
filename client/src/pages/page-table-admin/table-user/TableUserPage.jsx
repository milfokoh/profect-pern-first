import { useContext, useEffect, useState } from 'react';
import { Button, Col, Row, Table } from 'antd';
import {
	ArrowDownOutlined,
	EditTwoTone,
	PlusOutlined,
} from '@ant-design/icons';
import { fetchSection, fetchUser } from '../../../http/sectionAPI';
import { Context } from '../../..';
import './TableUserPage.css';
import { CreateMaterial, CreateSection, Spinner } from '../../../components';
import { Layout } from '@app/../UI';
import * as XLSX from 'xlsx';

const columns = [
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Email',
		dataIndex: 'email',
		key: 'email',
	},
	{
		title: 'Role',
		dataIndex: 'role',
		key: 'role',
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

const TableUserPage = () => {
	const { section } = useContext(Context);
	const [dataFetch, setDataFetch] = useState([]);
	const [loading, setLoading] = useState(true);
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

	const exportToExcel = () => {
		const wb = XLSX.utils.book_new();
		const ws = XLSX.utils.json_to_sheet(dataFetch);
		XLSX.utils.book_append_sheet(wb, ws, 'User');
		XLSX.writeFile(wb, 'user.xlsx');
	};

	const headerTable = ({ showModal }) => {
		return (
			<Row>
				<Col className='first col'>
					<h3>Таблица пользователей</h3>
				</Col>
				<Col className='second col'>
					<Button
						type='primary'
						className='btn-functionsl'
						icon={<ArrowDownOutlined />}
						onClick={exportToExcel}
					>
						Выгрузить
					</Button>
				</Col>
			</Row>
		);
	};

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await fetchUser();
				setDataFetch(data.rows);
			} catch (error) {
				console.error('Ошибка при получении материалов:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	const data = dataFetch.map((item, index) => ({ ...item, key: index }));
	console.log(dataFetch, 'datafetch user~~~~');

	if (loading) {
		return <Spinner />;
	}

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
export default TableUserPage;
