import { SearchBar_Var1 } from "@/components/Search";
import { PrimarySelect } from "@/components/Select";
import { useState } from "react";

export default function SearchSection() {
  const selectOptions = [
    { value: "week", title: "This Week" },
    { value: "month", title: "This Month" },
    { value: "year", title: "This Year" },
    { value: "lifetime", title: "LifeTime" },
  ];
  const [selectedValue, setSelectedValue] = useState(selectOptions[0].value);

  return (
    <div className="flex justify-between items-center mt-10">
      <SearchBar_Var1 />
      <PrimarySelect
        options={selectOptions}
        selectedOption={setSelectedValue}
      />
    </div>
  );
}
