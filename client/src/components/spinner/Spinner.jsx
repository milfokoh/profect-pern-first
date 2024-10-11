import React from 'react';
import { Flex, Spin } from 'antd';
import './Spinner.css';

const Spinner = () => {
	return (
		<Flex gap='middle' vertical className='f-center'>
			<Spin tip='Loading' size='large'>
				{' '}
			</Spin>
		</Flex>
	);
};
export default Spinner;
