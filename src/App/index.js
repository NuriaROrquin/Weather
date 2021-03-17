import WeatherCard from '../components/WeatherCard/index.js';
import { splitArray } from '../helpers/index.js';
import { BackgroundImage, AppContainer } from './styled.js';

export default function App() {

  const getWeather = async e => {
    const cityValue = "kiev";
    const countryValue = "ua";
    const KEY = "4a6550b8c756aff8e3580d75108b7594";

    const API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${cityValue},${countryValue}&appid=${KEY}`
    const response = await fetch(API_URL);
    const data = await response.json();

    splitArray(data.list)
  }

  getWeather();

  return (
    <AppContainer>
        <BackgroundImage />
        <WeatherCard />
		</AppContainer>
  );
}
