import { useWeather } from "../utils/RealTimeWeatherContext";
import { BsSunFill } from "react-icons/bs";

const UVIndex = () => {
  const { weatherData } = useWeather();

  const uvIndex =
    weatherData && weatherData.current ? weatherData.current.uv : null;

  return (
    <div className="text-white w-1/2 p-2 flex flex-col bg-black/5 backdrop-blur-sm border border-gray-500 rounded-md m-4">
      {uvIndex !== null ? (
        <div className="space-x-2">
          <p className="inline-block text-gray-400">
            <BsSunFill />
          </p>
          <p className="inline-block font-poppins text-gray-400">UV Index</p>
          <p className="font-poppins text-2xl">{uvIndex}</p>
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
};

export default UVIndex;
