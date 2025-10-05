import { useState } from "react";

type DropdownProps = {
  options: string[];
};

export const Dropdown = ({ options }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState("GDP");

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-1/5 p-4">
      <label
        htmlFor="data-select"
        className="block font-bold text-lg mb-2 text-gray-700"
      >
        Select Data:
      </label>
      <select
        id="data-select"
        value={selectedOption}
        onChange={handleDropdownChange}
        className="w-full p-3 border border-gray-300 rounded-lg text-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
      >
        {options.map((option, index) => (
          <option key={index} value={option} className="text-gray-700">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
