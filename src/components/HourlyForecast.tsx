import { useWeather } from "../utils/RealTimeWeatherContext";

const HourlyForecast = () => {
  const { weatherData } = useWeather();

  const hourlyForecast =
    weatherData &&
    weatherData.forecast &&
    weatherData.forecast.forecastday[0] && // Assuming we are checking the first forecast day
    weatherData.forecast.forecastday[0].hour;

  const formatTime = (timeString) => {
    const time = new Date(timeString);
    return time.toLocaleTimeString([], {
      hour: "numeric",
    });
  };

  const getWeatherIcon = (text: string, isDay: boolean) => {
    switch (text.toLowerCase()) {
      case "sunny ":
        return "./sunnyDark.png";
      case "sunny":
        return "./sunnyDark.png";
      case "clear ":
        return isDay ? "./clearDark.png" : "./clearNightDark.png";
      case "light rain shower ":
        return isDay ? "./sunnyRainDark.png" : "./nightRainDark.png";
      case "light rain ":
        return isDay ? "./sunnyRainDark.png" : "./nightRainDark.png";
      case "moderate rain ":
        return isDay ? "./sunnyRainDark.png" : "./nightRainDark.png";
      case "patchy rain nearby ":
        return isDay ? "./sunnyRainDark.png" : "./nightRainDark.png";
      case "partly cloudy ":
        return isDay ? "./partlyCloudyDay.png" : "./partlyCloudyNight.png";
      case "cloudy ":
        return isDay ? "./partlyCloudyDay.png" : "./partlyCloudyNight.png";
      case "overcast ":
        return isDay ? "./overcastDay.png" : "./overcastNightDark.png";
      // Add more cases for other weather conditions
      default:
        return "default-icon";
    }
  };

  if (!hourlyForecast) return <p>No forecast data available</p>;

  const currentHourIndex = new Date().getHours();
  let displayedHours = hourlyForecast.slice(currentHourIndex);

  if (displayedHours.length < 12) {
    const nextDayHourlyForecast =
      weatherData.forecast.forecastday[1] &&
      weatherData.forecast.forecastday[1].hour;

    if (nextDayHourlyForecast) {
      const remainingHours = 12 - displayedHours.length;
      displayedHours = displayedHours.concat(
        nextDayHourlyForecast.slice(0, remainingHours)
      );
    }
  }

  return (
    <div className="text-white p-2 flex flex-col items-center bg-black/5 backdrop-blur-sm border border-gray-500 rounded-md m-4">
      {hourlyForecast !== null ? (
        <div className="w-full">
          <p className="inline-block w-full mb-2 font-poppins text-gray-400 border-b border-gray-400">
            Hourly Forecast
          </p>
          <div className="space-x-2 flex overflow-scroll">
            {displayedHours.map((hourlyData, index) => (
              <div
                key={index}
                className="border border-gray-400 w-1/5 p-4 flex flex-col justify-evenly items-center"
              >
                <p className="font-poppins text-sm whitespace-nowrap">
                  {index === 0 ? "Now" : formatTime(hourlyData.time)}
                </p>
                <img
                  src={getWeatherIcon(
                    hourlyData.condition.text,

                    hourlyData.is_day !== 0
                  )}
                  alt=""
                />
                <p className="font-poppins">
                  {hourlyData.temp_f}
                  <span className="align-text-top font-poppins">°</span>F
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
};

export default HourlyForecast;
