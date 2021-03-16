import React from 'react'
import { CardContainer, Circle, Rectangle, TimeCard, Icon, Data } from './styled.js';

export default function WeatherCard() {
    return (
        <CardContainer>
            <Circle>
              <Icon>Temperatura</Icon>
              <Data>Datos</Data>
            </Circle>
            <Rectangle>
              <TimeCard /> 
            </Rectangle>
        </CardContainer>
    )
}
