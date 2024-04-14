import { useWeather } from "../utils/RealTimeWeatherContext";
import { BsSunFill } from "react-icons/bs";

const UVIndex = () => {
  const { weatherData } = useWeather();

  const uvIndex =
    weatherData && weatherData.current ? weatherData.current.uv : null;

  return (
    <div className="text-white w-1/4 p-1 flex flex-col items-center bg-black/5 backdrop-blur-sm border border-gray-500 rounded-md m-4">
      {uvIndex !== null ? (
        <div className="space-x-2">
          <p className="inline-block">
            <BsSunFill />
          </p>
          <p className="inline-block font-poppins">UV Index</p>
          <p className="text-center">{uvIndex}</p>
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
};

export default UVIndex;
