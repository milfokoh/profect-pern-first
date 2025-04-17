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
			<span className='spam-borrowed'>
				Материал заимствован с{' '}
				<a href='https://foxford.ru/wiki/geografiya'>foxford</a>. Все права
				принадлежат сайту
				<a href='https://foxford.ru/wiki/geografiya'> foxford.ru</a> и его
				правообладателям.
			</span>
		</Space>
	);
});
export default SectionList;
