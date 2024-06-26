import CurrentLocation from "./components/CurrentLocation";
import FeelsLike from "./components/FeelsLike";
import HourlyForecast from "./components/HourlyForecast";
import MoonPhase from "./components/MoonPhase";
import Precipitation from "./components/Precipitation";
import LocationInputForm from "./components/SearchBar";
import UVIndex from "./components/UVI";
import Visibility from "./components/Visibility";
import WindInfo from "./components/Wind";

const Home = () => {
  return (
    <div className="bg-bg bg-cover bg-center bg-no-repeat flex flex-col">
      <LocationInputForm />
      <div>
        <CurrentLocation />
      </div>
      <HourlyForecast />
      <WindInfo />
      <div className="flex justify-evenly">
        <UVIndex />
        <FeelsLike />
      </div>
      <div className="flex justify-evenly">
        <Visibility />
        <Precipitation />
      </div>
      <MoonPhase />
    </div>
  );
};

export default Home;
