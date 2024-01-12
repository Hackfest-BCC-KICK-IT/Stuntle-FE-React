import React, { useState } from "react";
import { RecipesModel } from "../constant/recipes";

interface DropdownProps {
  options: (string | RecipesModel)[];
  onSelect: (selectedOption: string, name: string) => void;
  name: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, name }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (item: string) => {
    console.log(item);

    onSelect(item, name);
    setSelectedOption(item);
  };

  return (
    <div className=" inline-block text-left w-full relative p-2 border border-border-grey rounded-md mt-2 pr-10">
      <select
        required
        value={selectedOption || ""}
        onChange={(e) => handleOptionSelect(e.target.value)}
        className=" bg-white text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
      >
        <option value="" disabled hidden>
          Pilih opsi
        </option>
        {options.map((option, index) => (
          <option
            key={index}
            value={typeof option === "string" ? option : option.id}
          >
            {typeof option === "string" ? option : option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
