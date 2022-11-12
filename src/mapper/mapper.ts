import { ICountryAPI } from "../types";
import { ICountry } from "../types";
import countries from "../country-data.json";

export const gettransformedCountries = (countries: ICountryAPI[]): any => {
  return countries.map(({ flags, name, capital, region, area, population }) => {
    return {
      flags: flags.svg,
      name: name.common,
      capital: capital[0],
      region: region,
      area: area,
      population: population,
    };
  });
};
