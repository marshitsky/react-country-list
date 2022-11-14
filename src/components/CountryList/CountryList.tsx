import { ICountry } from "../../types";
import { CountryItem } from "../CountryItem/CountryItem";
interface IProps {
  country: ICountry[];
}

export const CountryList = ({ country }: IProps) => {
  return (
    <ul className="list-group">
      <CountryItem country={country} />
    </ul>
  );
};
