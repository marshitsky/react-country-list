import { Badge } from "../Badge/Badge";
import { BadgeLabel } from "../../types";
import { Color } from "../../types";
import { ICountry } from "../../types";

interface IProps {
  country: ICountry[];
}

export const CountryItem = ({ country }: IProps) => {
  return (
    <>
      {country.map(({ flag, name, capital, region, area, population }) => (
        <li
          className="row row-cols-6 align-items-center border fw-bold"
          key={name}
        >
          <img src={flag} className="img-thumbnail" alt="" />
          <p className="col">{name}</p>
          <p className="col">{capital}</p>
          <p className="col">{region}</p>
          <Badge color={Color.Primary} badgeLabel="area">
            : {area}
          </Badge>
          <Badge color={Color.Secondary} badgeLabel="population">
            : {population}
          </Badge>
        </li>
      ))}
    </>
  );
};
