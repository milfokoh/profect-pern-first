import { useContext, useEffect, useState } from 'react';
import { Button, Col, Row, Table } from 'antd';
import { ArrowDownOutlined, EditTwoTone } from '@ant-design/icons';
import { fetchStudent, fetchUser } from '../../../http/sectionAPI';
import { Context } from '../../..';
import './TableUserPage.css';
import { Spinner } from '../../../components';
import { Layout } from '@app/../UI';
import * as XLSX from 'xlsx';

const columns = [
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Почта',
		dataIndex: 'email',
		key: 'email',
	},
	{
		title: 'Имя',
		dataIndex: 'firstName',
		key: 'firstName',
	},
	{
		title: 'Фамилия',
		dataIndex: 'lastName',
		key: 'lastName',
	},
	{
		title: 'Университет',
		dataIndex: 'univer',
		key: 'univer',
	},
	{
		title: 'Группа',
		dataIndex: 'groupUni',
		key: 'groupUni',
	},
	// {
	// 	title: 'Action',
	// 	dataIndex: '',
	// 	key: 'x',
	// 	render: () => (
	// 		<Button>
	// 			Edit <EditTwoTone />
	// 		</Button>
	// 	),
	// },
];

const TableUserPage = () => {
	const { section } = useContext(Context);
	const [dataFetch, setDataFetch] = useState([]);
	const [loading, setLoading] = useState(true);

	const exportToExcel = () => {
		const wb = XLSX.utils.book_new();
		const ws = XLSX.utils.json_to_sheet(dataFetch);
		XLSX.utils.book_append_sheet(wb, ws, 'User');
		XLSX.writeFile(wb, 'user.xlsx');
	};

	const headerTable = () => {
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
				const data = await fetchStudent();
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
				title={() => headerTable()}
			/>
		</Layout>
	);
};
export default TableUserPage;
