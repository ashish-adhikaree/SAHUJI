import { PrimarySelect } from "components";
import { useState } from "react";

export const ActionButton = () => {
  const actions = [
    { value: "week", title: "This Week" },
    { value: "month", title: "This Month" },
    { value: "year", title: "This Year" },
    { value: "lifetime", title: "LifeTime" },
  ];
  const [selectedAction, setSelectedAction] = useState(actions[0].value);
  return <PrimarySelect options={actions} selectedOption={setSelectedAction}/>;
};
