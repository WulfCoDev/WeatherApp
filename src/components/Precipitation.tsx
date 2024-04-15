import { useWeather } from "../utils/RealTimeWeatherContext";
import { GiWaterDrop } from "react-icons/gi";

const Precipitation = () => {
  const { weatherData } = useWeather();

  const precipitation =
    weatherData && weatherData.current ? weatherData.current.precip_in : null;

  return (
    <div className="text-white w-1/2 p-2 flex flex-col bg-black/5 backdrop-blur-sm border border-gray-500 rounded-md m-4">
      {precipitation !== null ? (
        <div className="space-x-2">
          <p className="inline-block text-gray-400">
            <GiWaterDrop />
          </p>
          <p className="inline-block font-poppins text-gray-400 capitalize">
            Precipitation
          </p>
          <p className="font-poppins text-2xl">
            {weatherData.current.precip_in}"
          </p>
          <p className="font-poppins text-sm">in last 24h</p>
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
};

export default Precipitation;
