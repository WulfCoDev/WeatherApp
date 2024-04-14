import CurrentLocation from "./CurrentLocation";
import CurrentTemp from "./CurrentTemp";
import LocationInputForm from "./SearchBar";

const Home = () => {
  return (
    <div className="bg-bg bg-cover bg-center bg-no-repeat flex flex-col h-screen">
      <LocationInputForm />
      <div>
        <CurrentLocation />
      </div>
    </div>
  );
};

export default Home;
