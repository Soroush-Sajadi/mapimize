import { useState } from "react";

export const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("GDP");

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="w-1/5 p-4 bg-gray-100">
      <label htmlFor="data-select" className="block font-bold text-lg mb-2">
        Select Data:
      </label>
      <select
        id="data-select"
        value={selectedOption}
        onChange={handleDropdownChange}
        className="w-full p-2 border border-gray-300 rounded-md text-lg"
      >
        <option value="GDP">GDP</option>
        <option value="Currency">Currency</option>
        <option value="Wealth Growth">Wealth Growth</option>
      </select>
    </div>
  );
};
