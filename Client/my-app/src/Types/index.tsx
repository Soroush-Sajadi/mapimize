export interface Country {
  code: string;
  name: string;
  continent: string;
  religion: string;
}

export type Continent =
  | "Asia"
  | "Europe"
  | "Africa"
  | "North America"
  | "South America"
  | "Oceania";
