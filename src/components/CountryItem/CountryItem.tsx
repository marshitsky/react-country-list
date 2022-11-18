import { Badge } from "../Badge/Badge";
import { Color } from "../../types";
import { ICountry } from "../../types";

interface IProps {
  country: ICountry;
}

export const CountryItem = ({
  country: { flag, name, capital, region, area, population },
}: IProps) => {
  return (
    <>
      <li className="row row-cols-6 align-items-center border fw-bold mt-3 rounded">
        <img src={flag} className="img-thumbnail" alt="Flag" />
        <p className="col">{name}</p>
        <p className="col">{capital}</p>
        <p className="col">{region}</p>
        <Badge color={Color.Primary} badgeLabel="area">
          {area}
        </Badge>
        <Badge color={Color.Secondary} badgeLabel={"population"}>
          {population}
        </Badge>
      </li>
    </>
  );
};
