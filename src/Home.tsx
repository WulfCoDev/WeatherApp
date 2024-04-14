import CurrentLocation from "./components/CurrentLocation";
import CurrentTemp from "./components/CurrentTemp";
import LocationInputForm from "./components/SearchBar";
import UVIndex from "./components/UVI";

const Home = () => {
  return (
    <div className="bg-bg bg-cover bg-center bg-no-repeat flex flex-col h-screen">
      <LocationInputForm />
      <div>
        <CurrentLocation />
      </div>
      <div>
        <UVIndex />
      </div>
    </div>
  );
};

export default Home;
