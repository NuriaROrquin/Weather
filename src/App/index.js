import WeatherCard from '../components/WeatherCard/index.js';
import { BackgroundImage, AppContainer } from './styled.js';
import useForecast from '../Hooks/useForecast.js';

export default function App() {

  const { forecast, weatherDay } = useForecast('Kiev', 'ua')

  return (
    <AppContainer>
        <BackgroundImage />
        <WeatherCard forecast={forecast} weatherDay={weatherDay} />
		</AppContainer>
  );
}
