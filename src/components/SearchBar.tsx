import React, { useState } from "react";
import { useWeather } from "../utils/RealTimeWeatherContext";

const LocationInputForm: React.FC = () => {
  const [location, setLocation] = useState("");
  const { fetchWeatherData } = useWeather();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchWeatherData(location);
  };

  return (
    <div className="bg-black h-fit m-4">
      <form onSubmit={handleSubmit} className="flex justify-evenly ">
        <input
          className="w-2/3 rounded-md bg-transparent border border-white text-white indent-2"
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder=" Enter Location"
        />
        <button
          type="submit"
          className="bg-white p-2 rounded-md backdrop-filter backdrop-blur-md bg-opacity-40 border border-white"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default LocationInputForm;
