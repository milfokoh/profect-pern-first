import { COLOR } from '@app/../constant';
import styled from 'styled-components';

export const Swiper = styled.div`
	box-sizing: border-box;
	display: grid;
	place-items: center;
	height: 600px;
	position: relative;
	overflow: hidden;
`;

export const SwiperWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	transition: transform 0.5s ease;
`;

export const SwiperSlide = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	&:hover img {
		opacity: 0.6;
	}

	&:hover div {
		opacity: 1;
	}

	img {
		display: block;
		max-width: 800px;
		height: auto;
		object-fit: cover;
		border-radius: 0.5rem;
		transition: opacity 0.3s ease;
		user-select: none;
	}
`;

export const SwiperButton = styled.button`
	position: absolute;
	background-color: rgba(74, 94, 122, 0.12);
	height: 30px;
	width: 30px;
	border-radius: 10px;
	border-color: rgba(74, 94, 122, 0.31);
	transition: background-color 0.3s;
	display: grid;
	align-content: center;

	&.swiper-button-prev {
		left: 5%;
	}

	&.swiper-button-next {
		right: 5%;
	}

	&:hover {
		background-color: rgba(74, 94, 122, 0.51);
	}

	&::after {
		color: white;
		font-size: 1.5rem;
		content: '';
	}
`;

export const Description = styled.a`
	position: absolute;
	bottom: 10px;
	left: 10px;
	color: ${COLOR.textWhite};
	background: rgba(0, 0, 0, 0.5);
	padding: 10px;
	border-radius: 5px;
	opacity: 0;
	transition: opacity 0.3s ease;

	&:hover {
		color: ${COLOR.lightBlue};
	}
`;
