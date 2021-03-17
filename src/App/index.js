import WeatherCard from '../components/WeatherCard/index.js';
import useForecast from '../Hooks/useForecast.js';
import { BackgroundImage, AppContainer } from './styled.js';

export default function App() {

  const { forecast } = useForecast('Kiev', 'ua');

  return (
    <AppContainer>
        <BackgroundImage />
        <WeatherCard />
		</AppContainer>
  );
}
