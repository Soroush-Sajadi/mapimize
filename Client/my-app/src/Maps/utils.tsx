import { countries } from "src/Data/countires";
import { Country } from "src/Types";

interface KeyValue {
  [key: string]: string | number;
}

export const mapCountires = (keyValue: KeyValue) => {
  return countries.filter((country: Country) =>
    Object.entries(keyValue).every(
      ([key, value]) => country[key as keyof Country] === value
    )
  );
};
