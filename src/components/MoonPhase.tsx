import { useWeather } from "../utils/RealTimeWeatherContext";
import {
  WiMoonAltWaxingCrescent4,
  WiMoonrise,
  WiMoonset,
  WiSunrise,
  WiSunset,
} from "react-icons/wi";
import { PiMoonStarsLight } from "react-icons/pi";

const MoonPhase = () => {
  const { weatherData } = useWeather();
  console.log("Weather Data: ", weatherData);

  const moonPhase =
    weatherData &&
    weatherData.forecast &&
    weatherData.forecast.forecastday[0] && // Assuming we are checking the first forecast day
    weatherData.forecast.forecastday[0].astro
      ? weatherData.forecast.forecastday[0].astro.moon_phase
      : null;

  return (
    <div className="text-white p-2 flex flex-col items-center bg-black/5 backdrop-blur-sm border border-gray-500 rounded-md m-4">
      {weatherData !== null ? (
        <div className="space-x-2 w-full">
          <p className="inline-block text-gray-400">
            <WiMoonAltWaxingCrescent4 />
          </p>
          <p className="inline-block font-poppins text-gray-400">{moonPhase}</p>
          <div>
            <img src="./moon.png" alt="" />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between border-b border-gray-400 p-2">
              <p className="inline-block font-poppins">Illumination</p>
              <div>
                <p className="inline-block font-poppins">
                  {weatherData.forecast.forecastday[0].astro.moon_illumination}%
                </p>
                <p className="inline-block">
                  {" "}
                  <PiMoonStarsLight />{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-between border-b border-gray-400 p-2">
              <p className="inline-block font-poppins">Next Moonrise</p>
              <div>
                <p className="inline-block font-poppins">
                  {weatherData.forecast.forecastday[0].astro.moonrise}
                </p>
                <p className="inline-block">
                  <WiMoonrise />
                </p>
              </div>
            </div>
            <div className="flex justify-between p-2">
              <p className="inline-block font-poppins">Next Moonset</p>
              <div>
                <p className="inline-block font-poppins">
                  {weatherData.forecast.forecastday[0].astro.moonset}
                </p>
                <p className="inline-block">
                  <WiMoonset />
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No moon phase data available</p>
      )}
    </div>
  );
};

export default MoonPhase;
