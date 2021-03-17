import { useCallback, useEffect, useState } from 'react';
import { splitArray } from '../helpers/index.js';

export default function useForecast( city ) {

    const [weatherDay, setWeatherDay] = useState([])
    const [forecast, setForecast] = useState([])


    const getForecast = useCallback(async () => {
      const KEY = "4a6550b8c756aff8e3580d75108b7594";
      const cityValue = city;
  
      const API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=${KEY}&lang=sp&units=metric`
      const response = await fetch(API_URL);
      const data = await response.json();
  
      setWeatherDay(splitArray(data.list).day)
      setForecast(splitArray(data.list).week)

    }, [city])
    
    useEffect(() => {
      getForecast();
    },[getForecast])

  return {forecast, weatherDay}
}
