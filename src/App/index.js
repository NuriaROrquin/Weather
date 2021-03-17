import WeatherCard from '../components/WeatherCard/index.js';
import { BackgroundImage, AppContainer } from './styled.js';

export default function App() {
  return (
    <AppContainer>
        <BackgroundImage />
        <WeatherCard/>
		</AppContainer>
  );
}
