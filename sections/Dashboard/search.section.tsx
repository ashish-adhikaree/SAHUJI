import { PrimarySearchBar, PrimarySelect } from "components";
import { useState } from "react";

export const Search = () => {
  const selectOptions = [
    { value: "week", title: "This Week" },
    { value: "month", title: "This Month" },
    { value: "year", title: "This Year" },
    { value: "lifetime", title: "LifeTime" },
  ];
  const [selectedValue, setSelectedValue] = useState(selectOptions[0].value);

  return (
    <div className="flex justify-between items-center mt-10">
      <PrimarySearchBar />
      <PrimarySelect
        options={selectOptions}
        selectedOption={setSelectedValue}
      />
    </div>
  );
}
