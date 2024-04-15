import CurrentLocation from "./components/CurrentLocation";
import LocationInputForm from "./components/SearchBar";
import UVIndex from "./components/UVI";
import WindInfo from "./components/Wind";

const Home = () => {
  return (
    <div className="bg-bg bg-cover bg-center bg-no-repeat flex flex-col h-screen">
      <LocationInputForm />
      <div>
        <CurrentLocation />
      </div>
      <WindInfo />
      <div className="flex justify-evenly">
        <UVIndex />
      </div>
    </div>
  );
};

export default Home;
