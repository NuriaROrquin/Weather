import React from 'react'
import { SelectField } from '../../Basics/index.js';
import { 
  CardContainer, 
  ActualWeather, 
  Rectangle, 
  TimeCard, 
  Temperature, 
  Data, 
  Degrees, 
  ContainerWeather, 
  ContainerData } from './styled.js';


export default function WeatherCard({ forecast, weatherDay }) {

  const cities = [
    {
      id: 1,
      label: "Kiev, ua",
    },
  ]


    return (
        <CardContainer>
          {weatherDay.map((item, index) => {
            return (
              <ActualWeather key={index}>
                <ContainerWeather>
                  <div style={{display: "flex"}}>
                    <Temperature>{item.items[0].main.temp}</Temperature>
                    <Degrees>°C</Degrees>
                  </div>
                  <SelectField options={cities} />
                </ContainerWeather>

                <ContainerData>

                  <Data>Datos</Data>
                </ContainerData>
              </ActualWeather>
            )})}

            <Rectangle>
              <TimeCard /> 
            </Rectangle>
        </CardContainer>
    )
}

/*temperature: weatherDay[0].items[0].main.temp, 
      description: weatherDay[0].items[0].weather[0].description,
      humidity: weatherDay[0].items[0].main.humidity,
      windSpeed: weatherDay[0].items[0].wind.speed, */