import { useWeather } from "../utils/RealTimeWeatherContext";
import { BsThermometerSun } from "react-icons/bs";

const FeelsLike = () => {
  const { weatherData } = useWeather();

  const feelsLike =
    weatherData && weatherData.current ? weatherData.current.feelslike_f : null;

  return (
    <div className="text-white w-1/2 p-2 flex flex-col bg-black/5 backdrop-blur-sm border border-gray-500 rounded-md m-4">
      {feelsLike !== null ? (
        <div className="space-x-2">
          <p className="inline-block text-gray-400">
            <BsThermometerSun />
          </p>
          <p className="inline-block font-poppins text-gray-400">Feels Like</p>
          <p className="font-poppins text-2xl">
            {weatherData.current.feelslike_f}
            <span className="align-text-top text-[24px]">°</span>F
          </p>
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
};

export default FeelsLike;
