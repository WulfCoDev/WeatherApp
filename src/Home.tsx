import CurrentTemp from "./CurrentTemp";
import LocationInputForm from "./SearchBar";
import { useWeather } from "./utils/RealTimeWeatherContext";
import { useState } from "react";
const Home = () => {
  return (
    <div className="bg-bg bg-cover bg-center bg-no-repeat flex flex-col h-screen">
      <LocationInputForm />
      <div>
        <CurrentTemp />
      </div>
    </div>
  );
};

export default Home;
