import styled from 'styled-components';

import { Layout, Section } from '@app/../UI';

export const Container = styled(Layout)`
	display: grid;
	grid-template:
		'list section'
		'list planet'
		'. planet';
	justify-items: center;
	gap: 20px;
`;

export const StyledLayout = styled.div`
	width: 45vw;
	height: auto;
	display: flex;
	flex-direction: column;
	gap: 10px;
	border-radius: 20px;
	padding: 20px;
	background-color: white;
	grid-area: list;
`;

export const StyledTitleContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 30px;
`;

export const StyledTitle = styled.h1`
	text-transform: uppercase;
	font-weight: bold;
	font-size: 3rem;
	color: #2c6c8b;
`;

export const SectionConteiner = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

export const StyledBackgroundImage = styled.img`
	max-width: 560px;
	grid-area: planet;
	
`;

export const StyledSection = styled(Section)`
	grid-area: section;
`;

// .content {
// 	min-height: calc(100vh - 24px - 64px);
// 	margin: 24px 16px;
// 	padding: 24px;
// 	background: var(--antd-token-color-bg-container);
// 	border-radius: var(--antd-token-border-radius-lg);
// }

// .space {
// 	display: flex;
// }

// .the-label {
// 	padding: 100px;
// 	background-image: url(C:\Users\Alesya\Desktop\alesya\учеба\project-pern-first\client\src\components\image\main-back.jpg);
// 	/* border: 1px solid red; */
// 	border-radius: 85px;
// }

// .columns {
// 	align-content: center;
// 	/* сделать выравнивание */
// 	color: #2c6c8b;
// 	/* border: 1px solid green; */
// }

// .the-info {
// 	justify-self: center;
// 	width: 90%;
// 	/* border: 1px solid red; */
// }

// .top-brdr {
// 	margin-top: 10vh;
// 	margin-bottom: 10vh;
// 	border-top: 2px solid rgb(107, 107, 107);
// }

// .color {
// 	background-color: rgba(240, 255, 255, 0.304);
// }

// b {
// 	font-size: 45px;
// }

// .first {
// 	font-weight: bold;
// 	font-size: 30px;
// }

// .modul-list {
// 	width: 50vw;
// 	height: auto;
// 	display: flex;
// 	flex-direction: column;
// 	gap: 10px;

// 	border: 2px solid red;
// }

// .lets-start {
// 	align-self: end;
// 	color: rgb(0, 58, 0);
// 	font-weight: bold;
// 	background-color: rgba(240, 255, 255, 0.304) !important;
// 	border: 2px solid rgb(0, 58, 0) !important;
// }

// .lets-start:hover {
// 	color: rgb(255, 255, 255) !important;
// 	background-color: rgba(61, 95, 55, 0.879) !important;
// }

// .space-top {
// 	margin-top: 7vh;
// }

// .bio-course {
// 	display: grid;
// 	/* align-items: center; */
// 	/* justify-items: center; */
// 	font-weight: 400;
// 	font-size: 15px;
// 	/* padding: 10px; */
// }

// .border-right {
// }

// .second-row {
// 	border: 1px solid red;
// }

// .col-center {
// 	display: grid;
// 	align-items: center;
// 	justify-items: center;
// }

// .col-header {
// 	font-weight: 500;
// 	font-size: 20px;
// }

// .col-info {
// 	font-size: 15px;
// }

// .wrapper-header {
// 	display: flex;
// 	align-items: baseline;
// 	justify-content: center;
// }

// .block-info {
// 	display: flex;
// 	flex-direction: column;
// }

// .wrapper-grid {
// 	display: grid;
// 	/* grid-template-columns: repeat(2, 50%); */
// 	gap: 30px;
// 	width: 50vw;
// 	height: auto;
// }

// .module-wrapper {
// 	display: flex;
// 	flex-direction: column;
// 	padding: 20px;
// 	border: 1px solid black;
// 	border-radius: 10px;
// }

// .title {
// 	display: flex;
// 	align-items: baseline;
// 	justify-content: center;
// 	margin-bottom: 20px;
// 	border: 1px solid red;
// }
