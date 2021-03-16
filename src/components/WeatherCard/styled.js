import styled from "styled-components";

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
    width: 90vw; 
    height: 85%;
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(5px);
    justify-content: space-around;
    align-items: center;
    position: relative;
`;

export const Circle = styled.div`
	display: flex;
    width: 25rem;
    height: 25rem;
    background-color: rgba(0, 0, 0, .15);
    border-radius: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    padding: 1rem;
`;

export const Rectangle = styled.div`
	display: flex;
    width: 90%;
    height: 20%;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 1rem;

    padding: 1rem;

    color: white;
`;

export const TimeCard = styled.div`
    display: flex;
    flex-basis: 20%;
    height: 100%;
`;

export const Icon = styled.div`
    display: flex;
    color: white;
    justify-self: center;
`;

export const Data = styled.div`
    display: flex;
    color: white;
    justify-self: flex-end;
`;