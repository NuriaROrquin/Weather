import styled from "styled-components";
import { breakpoints } from "../../definitions";

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
    width: 100%; 
    height: 100%;
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(5px);
    align-items: center;
    position: relative;
    padding: 2rem;
    min-height: 90vh;
    justify-content: center;

    ${breakpoints.tabletXL} {
		height: auto;
        padding: 3rem 0;
	}
`;

export const ActualWeather = styled.div`
	display: flex;
    min-width: 22.68;
    width: 95%;
    height: 50%;
    background-color: rgba(0, 0, 0, .15);
    border-radius: 2rem;
    align-items: center;
    justify-content: center;
    
    margin-bottom: 2rem;

    padding: 2rem;

    ${breakpoints.tabletXL} {
		flex-direction: column;
        min-width: auto;
	}
`;

export const Temperature = styled.h1`
    display: flex;
    color: white;
    justify-self: center;
    font-size: 7rem;
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

export const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;
    height: 75%;
    width: 100%;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    padding: 2rem;

    ${breakpoints.tabletXL} {
		height: 25rem;
	}
`;

export const Description = styled.span`
    display: flex;
    color: white;
    flex-direction: column;
    justify-self: flex-end;
    text-transform: capitalize;
    align-items: center;
    font-size: 2rem;
    font-weight: 300;
`;

export const Humidity = styled.span`
    display: flex;
    color: white;
    justify-self: flex-end;
    font-size: 2rem;
    font-weight: 300;
    align-items: center;
    gap: 1rem;
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
    width: ${(props) => (props.changeHour ? '25%' : '20%')};
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;

    ${breakpoints.tabletXL} {
		flex-direction: row;
        width: 100%;
        justify-content: space-between;
        padding: 1rem;
	}

`;

export const TemperatureForecast = styled.h3`
    display: flex;
    color: white;
    justify-self: center;
    font-size: 3rem;
    align-self: center;
    margin: 0;

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
    margin: 0;
`;

export const ContainerDetailsForecast = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 40%;

    ${breakpoints.tabletXL} {
		flex-direction: row;
        justify-content: flex-end;
        min-width:0;
        gap: 2rem;
	}
`;

export const ContainerIcon = styled.div`
    display: flex;
    height: 5rem;
    width: 5rem;
    align-items: center;
    justify-content: center;

    ${breakpoints.phablet} {
		display: none;
	}
`;