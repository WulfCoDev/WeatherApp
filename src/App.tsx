import Home from "./Home";
import { WeatherProvider } from "./utils/RealTimeWeatherContext";

function App() {
  return (
    <WeatherProvider>
      <div className="">
        <Home />
      </div>
    </WeatherProvider>
  );
}

export default App;
