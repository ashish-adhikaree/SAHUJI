import { Dispatch, SetStateAction, useState } from "react";

export const SectionSelect = ({
  sections,
  selected,
  setSelected,
}: {
  sections: string[];
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) => {
  const handleClick = (index: number) => {
    setSelected(index);
  };
  return (
    <div className="bg-gray-100 w-fit rounded-md overflow-hidden">
      {sections.map((section, index) => (
        <button
          onClick={() => {
            handleClick(index);
          }}
          key={index}
          className={`${
            selected === index && "bg-gray-200"
          } px-5 py-2 capitalize`}
        >
          {section}
        </button>
      ))}
    </div>
  );
};
