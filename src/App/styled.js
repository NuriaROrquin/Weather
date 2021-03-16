import styled from 'styled-components';
import weatherImage from '../assets/image-weather.webp'

export const AppContainer = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	justify-content: center;
	align-items: center;
	position: relative;
`;

export const BackgroundImage = styled.img`
	background: url(${weatherImage});
	background-position: bottom;
	background-size: cover;
	filter: brightness(50%);
	width: 100%;
	height: 100%;
	position: absolute;
`;