import React from 'react';
import './SectionList.css';
import SectionItem from '../secItem/SectionItem';
import { Space } from 'antd';
import { observer } from 'mobx-react-lite';

const SectionList = observer(({ section, materials }) => {
	return (
		<Space direction='vertical' size='middle' className='space'>
			{section.section.map(sec => (
				<SectionItem key={sec.id} section={sec} materials={materials} />
			))}
		</Space>
	);
});
export default SectionList;
