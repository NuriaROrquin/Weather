import { useCallback, useEffect, useState } from 'react';
import { splitArray } from '../helpers/index.js';

export default function useForecast( city ) {

    const [weatherDay, setWeatherDay] = useState([])
    const [forecast, setForecast] = useState([])


    const getForecast = useCallback(async () => {
      const KEY = "25946a96a86f0c7a2ca0b83890dd30ef";
      const cityValue = city;
  
      const API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=${KEY}&lang=sp&units=metric`
      const response = await fetch(API_URL);
      const data = await response.json();

      console.log(data)
  
      setWeatherDay(splitArray(data.list).day)
      setForecast(splitArray(data.list).week)

    }, [city])

    useEffect(() => {
      getForecast();
    }, [getForecast, city])

  return {forecast, weatherDay}
}