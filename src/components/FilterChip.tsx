import React from "react";

interface FilterChipsProps {
  selectedFilter: string;
  onSelectFilter: (filter: string) => void;
  filters: string[];
  filterType: string;
}

const FilterChips: React.FC<FilterChipsProps> = ({
  selectedFilter,
  onSelectFilter,
  filters,
  filterType,
}) => {
  return (
    <div className="flex ">
      {filters.map((filter) => (
        <div
          key={filter}
          className="inline-flex items-center cursor-pointer"
          onClick={() => onSelectFilter(filter)}
        >
          <input
            type="radio"
            name={`radio-${filterType}`}
            id={`radio-${filter}-${filterType}`}
            className="mx-2"
            checked={selectedFilter === filter}
            onChange={() => onSelectFilter(filter)}
          />
          <label htmlFor={`radio-${filter}-${filterType}`}>{filter}</label>
        </div>
      ))}
    </div>
  );
};

export default FilterChips;
