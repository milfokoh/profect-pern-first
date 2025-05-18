import { FC, useState, useEffect } from 'react';

import { TGalleryImage } from './GalleryImage.types';

import { images } from '@app/../cms';

import {
	Swiper,
	SwiperWrapper,
	SwiperSlide,
	Description,
	StyledImage,
} from './GalleryImage.styled';

const GalleryImage: FC<TGalleryImage> = ({ title, description }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);

	const nextSlide = () => {
		setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
	};

	const prevSlide = () => {
		setCurrentIndex(
			prevIndex => (prevIndex - 1 + images.length) % images.length
		);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (!isHovered) {
				nextSlide();
			}
		}, 4000);

		return () => clearInterval(interval);
	}, [isHovered]);

	return (
		<Swiper>
			<SwiperWrapper>
				<SwiperSlide
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<StyledImage
						src={images[currentIndex].image}
						alt={images[currentIndex].description}
					/>
					<Description
						style={{ opacity: isHovered ? 1 : 0 }}
						href={images[currentIndex].link}
					>
						{images[currentIndex].description}
					</Description>
				</SwiperSlide>
			</SwiperWrapper>
		</Swiper>
	);
};

export default GalleryImage;
