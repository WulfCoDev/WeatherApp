import React, { createContext, useContext, useState, ReactNode } from "react";
import { fetchRealTimeWeather } from "./api";

interface LocationData {
  country: string;
  lat: number;
  localtime: string;
  localtime_epoch: number;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
}

interface Condition {
  code: number;
  icon: string;
  text: string;
}

interface CurrentWeatherData {
  cloud: number;
  condition: Condition;
  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  humidity: number;
  is_day: number;
  last_updated: string;
  last_updated_epoch: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
}

interface WeatherData {
  location: LocationData;
  current: CurrentWeatherData;
}

interface WeatherContextType {
  weatherData: WeatherData | null;
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData | null>>;
  fetchWeatherData: (location: string) => Promise<void>;
}

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const fetchWeatherData = async (location: string) => {
    try {
      const result = await fetchRealTimeWeather(location);
      console.log("API response:", result);
      setWeatherData(result);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ weatherData, setWeatherData, fetchWeatherData }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
