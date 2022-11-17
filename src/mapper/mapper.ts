import { ICountryAPI } from "../types";
import { ICountry } from "../types";
import countries from "../country-data.json";

export const getTransformedCountries = (
  countries: ICountryAPI[]
): ICountry[] => {
  return countries.map(({ flags, name, capital, region, area, population }) => {
    return {
      flag: flags.svg,
      name: name.common,
      capital: capital[0],
      region: region,
      area: area,
      population: population,
    };
  });
};
