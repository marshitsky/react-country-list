import { CountryList } from "./components/CountryList/CountryList";
import countries from "./country-data.json";
import { getTransformedCountries } from "./mapper/mapper";

export const App = () => {
  const transformedCountries = getTransformedCountries(countries);

  return (
    <div className="container-xxl">
      <h1 className="display-1">Country list</h1>
      <CountryList countries={transformedCountries} />
    </div>
  );
};
