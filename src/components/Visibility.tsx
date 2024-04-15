import { useWeather } from "../utils/RealTimeWeatherContext";
import { BsEyeFill } from "react-icons/bs";

const Visibility = () => {
  const { weatherData } = useWeather();

  const visibility =
    weatherData && weatherData.current ? weatherData.current.vis_miles : null;

  return (
    <div className="text-white w-1/2 p-2 flex flex-col bg-black/5 backdrop-blur-sm border border-gray-500 rounded-md m-4">
      {visibility !== null ? (
        <div className="space-x-2">
          <p className="inline-block text-gray-400">
            <BsEyeFill />
          </p>
          <p className="inline-block font-poppins text-gray-400">Visibility</p>
          <p className="font-poppins text-2xl">
            {weatherData.current.vis_miles} mi
          </p>
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
};

export default Visibility;
