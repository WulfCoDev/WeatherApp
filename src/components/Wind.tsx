import { useWeather } from "../utils/RealTimeWeatherContext";
import { FaWind } from "react-icons/fa";
import { GiCompass } from "react-icons/gi";

const WindInfo = () => {
  const { weatherData } = useWeather();

  const wind =
    weatherData && weatherData.current ? weatherData.current.wind_mph : null;

  return (
    <div className="text-white p-2 flex flex-col items-center bg-black/5 backdrop-blur-sm border border-gray-500 rounded-md m-4">
      {wind !== null ? (
        <div className="space-x-2 w-full">
          <p className="inline-block">
            <FaWind />
          </p>
          <p className="inline-block font-poppins">Wind</p>
          <div className="flex justify-between">
            <div className="w-2/3">
              <div className="border-b border-gray-400 flex items-center">
                <div className="font-poppins text-4xl p-2">
                  {weatherData.current.wind_mph}
                </div>
                <div className="p-2">
                  <p className="font-poppins text-sm text-gray-400">MPH</p>
                  <p>Wind</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="font-poppins text-4xl p-2">
                  {weatherData.current.gust_mph}
                </div>
                <div className="p-2">
                  <p className="font-poppins text-sm text-gray-400">MPH</p>
                  <p>Gust</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center font-poppins w-1/3 text-4xl text-center">
              {weatherData.current.wind_dir}
              <GiCompass />
            </div>
          </div>
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
};

export default WindInfo;
