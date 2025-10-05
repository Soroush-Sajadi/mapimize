import { Dropdown } from "src/Components/Dropdown";
import EuropeMap from "src/Maps/EropueMap";

export const EuropeView = () => {
  return (
    <div className="flex">
      <Dropdown />
      <div className="w-4/5">
        <EuropeMap />
      </div>
    </div>
  );
};
