import { useWeather } from "./utils/RealTimeWeatherContext";

const CurrentTemp = () => {
  const { weatherData } = useWeather();

  const getWeatherIcon = (text: string, isDay: boolean) => {
    switch (text.toLowerCase()) {
      case "sunny":
        return "./sunnyDark.png";
      case "clear":
        return isDay ? "./clearDark.png" : "./clearNightDark.png";
      case "light rain shower":
        return isDay ? "./sunnyRainDark.png" : "./nightRainDark.png";
      case "cloudy":
        return "cloud-icon";
      // Add more cases for other weather conditions
      default:
        return "default-icon";
    }
  };

  return (
    <div className="text-white flex flex-col items-center bg-black/40 backdrop-blur-sm border border-gray-500 rounded-md m-4 p-4">
      {weatherData ? (
        <div className="p-4">
          <div className="flex flex-col items-center">
            <p>
              {weatherData.location.name}, {weatherData.location.region}
            </p>
            <img
              src={getWeatherIcon(
                weatherData.current.condition.text,
                weatherData.current.is_day !== 0
              )}
              alt=""
            />
            <p className="font-poppins text-4xl capitalize">
              {weatherData.current.condition.text}
            </p>
            <p className="font-poppins text-3xl">
              {weatherData.current.temp_f}
              <span className="align-text-top text-[24px]">°</span>F
            </p>
          </div>
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
};

export default CurrentTemp;
