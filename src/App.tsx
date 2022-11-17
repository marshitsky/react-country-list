import { CountryList } from "./components/CountryList/CountryList";
import countries from "./country-data.json";
import { getTransformedCountries } from "./mapper/mapper";

export const App = () => {
  return (
    <div className="container-xl">
      <h1 className="display-1">Country list</h1>
      <CountryList country={getTransformedCountries(countries)} />
    </div>
  );
};
