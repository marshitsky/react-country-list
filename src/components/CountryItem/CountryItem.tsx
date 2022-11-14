import { Badge } from "../Badge/Badge";
import { BadgeLabel } from "../../types";
import { Color } from "../../types";
import { ICountry } from "../../types";

interface IProps {
  country: ICountry[];
}

export const CountryItem = ({ country }: IProps) => {
  return (
    <ul className="list-group">
      {Object.values(country).map(
        ({ flag, name, capital, region, area, population }) => (
          <li className="list-group-item" key={name}>
            <div className="d-flex p-2 d-flex justify-content-between">
              <div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
                <div className="col d-flex align-items-center">
                  <img src={flag} className="img-thumbnail" alt="" />
                </div>
                <div className="col d-flex align-items-center">
                  <p>
                    <strong>{name}</strong>
                  </p>
                </div>
                <div className="col d-flex align-items-center">
                  <p>
                    <strong>{capital}</strong>
                  </p>
                </div>
                <div className="col d-flex align-items-center">
                  <p>
                    <strong>{region}</strong>
                  </p>
                </div>
                <div className="col d-flex align-items-center">
                  <Badge color={Color.Primary} badgeLabel="area: ">
                    {area}
                  </Badge>
                </div>
                <div className="col d-flex align-items-center">
                  <Badge color={Color.Secondary} badgeLabel="population: ">
                    {population}
                  </Badge>
                </div>
              </div>
            </div>
          </li>
        )
      )}
    </ul>
  );
};
