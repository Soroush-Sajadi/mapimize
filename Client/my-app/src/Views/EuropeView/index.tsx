import { Dropdown } from "src/Components/Dropdown";
import EuropeMap from "src/Maps/EropueMap";
import { useLocation } from "react-router-dom";
import { getOptions } from "../utils";
import { useEffect, useState } from "react";
import { fetchCountryData } from "src/Api";

export const EuropeView = () => {
  const [countryData, setCountryData] = useState<string | null>(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const field = queryParams.get("field");
  const opitions = getOptions(field);

  useEffect(() => {
    if (field) {
      fetchCountryData(field)
        .then((data) => setCountryData(data))
        .catch((error) => console.error("Error fetching country data:", error));
    }
  }, [field]);

  return (
    <div className="flex">
      <Dropdown options={opitions} />
      <div className="w-4/5">
        <EuropeMap />
      </div>
    </div>
  );
};
