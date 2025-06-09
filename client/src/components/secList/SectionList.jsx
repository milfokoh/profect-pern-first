import { useEffect, useState } from 'react';
import './SectionList.css';
import SectionItem from '../secItem/SectionItem';
import { Space } from 'antd';
import { observer } from 'mobx-react-lite';
import Spinner from '../spinner';

const SectionList = observer(({ section, materials }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (section && materials) {
			setLoading(false);
		}
	}, [section, materials]);

	if (loading) {
		return <Spinner />;
	}

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
