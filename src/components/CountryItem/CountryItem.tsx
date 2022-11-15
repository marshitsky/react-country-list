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
        <li className="list-group-item" key={name}>
          <div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3 d-flex p-2 d-flex justify-content-between">
            <img
              src={flag}
              className="img-thumbnail d-flex align-items-center"
              alt=""
            />
            <p className="col d-flex align-items-center">
              <strong>{name}</strong>
            </p>
            <p className="col d-flex align-items-center">
              <strong>{capital}</strong>
            </p>
            <p className="col d-flex align-items-center">
              <strong>{region}</strong>
            </p>
            <div className="col d-flex align-items-center">
              <Badge color={Color.Primary} badgeLabel="area">
                : {area}
              </Badge>
            </div>
            <div className="col d-flex align-items-center">
              <Badge color={Color.Secondary} badgeLabel="population">
                : {population}
              </Badge>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};
