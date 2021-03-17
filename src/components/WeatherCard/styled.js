import styled from "styled-components";
import { breakpoints } from "../../definitions";

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
    width: 100vw; 
    min-height: 100vh;
    height: 20rem;
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(5px);
    justify-content: space-around;
    align-items: center;
    position: relative;

    ${breakpoints.tabletXL} {
		height: auto;
        padding: 3rem 0;
	}
`;

export const ActualWeather = styled.div`
	display: flex;
    width: 95%;
    height: 50%;
    background-color: rgba(0, 0, 0, .15);
    border-radius: 2rem;
    align-items: center;
    justify-content: space-around;

    padding: 1rem;

    ${breakpoints.tabletXL} {
		flex-direction: column;
	}
`;

export const Temperature = styled.h1`
    display: flex;
    color: white;
    justify-self: center;
    font-size: 10rem;
    align-self: center;

    ${breakpoints.tabletXL} {
		font-size: 5rem;
	}
`;

export const Degrees = styled.span`
    display: flex;
    color: white;
    font-size: 2rem;
    align-self: top;
    margin-top: 2rem;
`;

export const ContainerWeather = styled.div`
    display: flex;
    height: min-content;
    flex-basis: 40%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const ContainerData = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${breakpoints.tabletXL} {
		width: 100%;
	}
`;

export const ContainerIcon = styled.div`
    display: flex;
    height: 10rem;
    width: 10rem;
    align-items: center;
    justify-content: center;
    ${breakpoints.tabletXL} {
		height: 7rem;
        width: 7rem;
	}
`;

export const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;
    height: 40%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`;

export const Description = styled.span`
    display: flex;
    color: white;
    justify-self: flex-end;
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 300;
`;

export const Humidity = styled.span`
    display: flex;
    color: white;
    justify-self: flex-end;
    font-size: 2rem;
    font-weight: 300;
`;

export const WindSpeed = styled.span`
    display: flex;
    color: white;
    justify-self: flex-end;
    font-size: 2rem;
    font-weight: 300;
`;

export const Rectangle = styled.div`
	display: flex;
    width: 95%;
    min-height: 30%;
    height: auto;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    align-items: center;

    padding: 1rem;

    color: white;
    
    ${breakpoints.tabletXL} {
		flex-direction: column;
        margin-top: 3rem;
	}
`;

export const ForecastCard = styled.div`
    display: flex;
    width: 20%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${breakpoints.tabletXL} {
		flex-direction: row;
        width: 100%;
        justify-content: space-around;
	}
`;

export const TemperatureForecast = styled.h3`
    display: flex;
    color: white;
    justify-self: center;
    font-size: 3rem;
    align-self: center;

    ${breakpoints.tabletXL} {
		font-size: 2rem;
	}
`;

export const Day = styled.h2`
    display: flex;
    color: white;
    justify-self: center;
    font-size: 2rem;
    justify-self: flex-start;
    font-weight: 400;
`;

export const ContainerDetailsForecast = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 40%;

    ${breakpoints.tabletXL} {
		flex-direction: row;
        justify-content: space-between;
	}
`;