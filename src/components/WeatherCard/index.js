import React, { useEffect, useState } from 'react'
import { SelectField } from '../../basics/index.js';
import { getDay, getHour } from '../../helpers/index.js';
import useApiIp from '../../hooks/useApiIp.js';
import useForecast from '../../hooks/useForecast.js';
import { 
  CardContainer, 
  ActualWeather, 
  Rectangle, 
  ForecastCard, 
  Temperature, 
  Description, 
  Humidity,
  WindSpeed,
  Degrees, 
  ContainerWeather, 
  ContainerDescription,
  ContainerData,
  TemperatureForecast,
  Day,
  ContainerDetailsForecast,
  ContainerIcon } from './styled.js';

export default function WeatherCard() {

  const [city, setCity] = useState("Buenos Aires");

  const [isHour, setIsHour] = useState();

  const { forecast, weatherDay } = useForecast(city);

  const { ipData, getIp } = useApiIp();

  useEffect(
		() => {
      getIp();
      getHour();
      setIsHour(getHour());
		},
		[getIp]
	);

  const cities = [
    {
      id: 1,
      label: `${ipData.city}`,
      country: `${ipData.country}`
    },
    {
      id: 2,
      label: 'Londres',
      country: 'Inglaterra'
    },
    {
      id: 3,
      label: 'Madrid',
      country: 'España'
    },
    {
      id: 4,
      label: 'Roma',
      country: 'Italia'
    },
    {
      id: 5,
      label: 'Tokio',
      country: 'Japón'
    },
    {
      id: 6,
      label: 'París',
      country: 'Francia'
    }
  ];

  const handleShowField = (field, label) => {
    setCity(label);
  };

    return (
        <CardContainer>
          {weatherDay.map((item, index) => {
            return (
              <ActualWeather key={index}>
                <ContainerWeather>
                  <div>
                    <Day>Hoy</Day>
                  </div>
                  <div style={{display: "flex"}}>
                    <Temperature>{item.items[0].main.temp}</Temperature>
                    <Degrees>°C</Degrees>
                  </div>
                  <SelectField id={cities.id} options={cities} onChange={handleShowField} value={cities.label} />
                </ContainerWeather>

                <ContainerData>

                  <ContainerDescription>

                    <Description>

                      <img style={{width: "7rem", height: "7rem"}} alt="iconWeather" src={`http://openweathermap.org/img/w/${item.items[0].weather[0].icon}.png`}></img>

                      <span style={{fontWeight: "400"}}>{item.items[0].weather[0].description}</span>

                    </Description>

                    <Humidity>Humedad: {item.items[0].main.humidity} %</Humidity>

                    <WindSpeed>Velocidad del viento: {((item.items[0].wind.speed)*3.6).toFixed(1)} km/h</WindSpeed>

                  </ContainerDescription>

                </ContainerData>
              </ActualWeather>
            )})}

          
            <Rectangle>
            {forecast.map((item, index) => {
            return (
              <ForecastCard key={index} changeHour={isHour}>
                <div style={{width: "auto"}}>
                  <Day>{getDay(item.items[0].dt_txt).dayOfTheWeek}</Day>
                </div>
                
                <ContainerDetailsForecast>
                  <ContainerIcon>
                    <img style={{width: "100%", height: "100%"}} alt="iconWeather" src={`http://openweathermap.org/img/w/${item.items[0].weather[0].icon}.png`}></img>
                  </ContainerIcon>
                  <div style={{display: "flex", width: "7rem", justifyContent: "flex-end"}}>
                    <TemperatureForecast>{item.items[0].main.temp}</TemperatureForecast>
                    <Degrees style={{fontSize: "1rem", marginTop: "-6px"}}>°C</Degrees>
                  </div>
                </ContainerDetailsForecast>
              </ForecastCard> 
            )
          })}
            </Rectangle>
        </CardContainer>
    )
}