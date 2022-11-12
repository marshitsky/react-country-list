export interface ICountryAPI {
  flags: ICountryAPIFlag;
  name: ICountryAPINativeName;
  capital: string[];
  region: string;
  area: number;
  population: number;
}

export interface ICountryAPIFlag {
  png: string;
  svg: string;
}

export interface ICountryAPINativeName {
  common: string;
  official: string;
  nativeName?: ICountryAPINativeLang;
}

export interface ICountryAPINativeLang {
  spa?: ICountryAPINativeName;
}

export interface ICountryAPINativeName {
  official: string;
  common: string;
}

export interface ICountry {
  flags: string;
  name: string;
  capital: string;
  population: string;
  area: number;
  region: number;
}

export enum Color {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Danger = "danger",
  Warning = "warning",
  Info = "info",
  Light = "light",
  Dark = "dark",
}

export type BadgeLabel = "area: " | "population: ";
