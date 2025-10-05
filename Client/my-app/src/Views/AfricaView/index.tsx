import { Dropdown } from "src/Components/Dropdown";
import { useLocation } from "react-router-dom";
import { getOptions } from "../utils";
import AfricaMap from "src/Maps/AfricaMap";

export const AfricaView = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const field = queryParams.get("field");
  const opitions = getOptions(field);

  return (
    <div className="flex">
      <Dropdown options={opitions} />
      <div className="w-4/5">
        <AfricaMap />
      </div>
    </div>
  );
};
