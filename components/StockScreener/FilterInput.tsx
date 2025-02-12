import React, { useState } from "react";
import { PARAMETERS } from "@/lib/constants";
import { FilterCondition, FilterOperator } from "@/lib/types";

interface FilterInputProps {
  onAddFilter: (filter: FilterCondition) => void;
}

export default function FilterInput({ onAddFilter }: FilterInputProps) {
  const [parameter, setParameter] = useState<string>("");
  const [operator, setOperator] = useState<FilterOperator>(">");
  const [value, setValue] = useState<string>("");

  const handleAddFilter = () => {
    if (parameter && value) {
      onAddFilter({
        parameter: parameter as keyof typeof PARAMETERS,
        operator,
        value: parseFloat(value),
      });
      setValue("");
    }
  };

  return (
    <div className="flex flex-col space-y-4 p-4 bg-white rounded-lg shadow">
      <div className="flex space-x-2">
        <select
          className="flex-1 p-2 border rounded"
          value={parameter}
          onChange={(e) => setParameter(e.target.value)}
        >
          <option value="">Select Parameter</option>
          {Object.entries(PARAMETERS).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
        <select
          className="w-24 p-2 border rounded"
          value={operator}
          onChange={(e) => setOperator(e.target.value as FilterOperator)}
        >
          <option value=">">{">"}</option>
          <option value="<">{"<"}</option>
          <option value="=">{"="}</option>
        </select>
        <input
          type="number"
          className="flex-1 p-2 border rounded"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Value"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleAddFilter}
        >
          Add Filter
        </button>
      </div>
    </div>
  );
}
