import { useState, useEffect, FC } from 'react';

import { UpOutlined } from '@ant-design/icons';

import { TScrollButtonProp } from './ScrollButton.types';
import { StyledButton } from './ScrollButton.styled';

const ScrollButton: FC<TScrollButtonProp> = () => {
	const [visible, setVisible] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 200) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		visible && (
			<StyledButton
				type='primary'
				shape='circle'
				icon={<UpOutlined />}
				onClick={scrollToTop}
			/>
		)
	);
};

export default ScrollButton;
