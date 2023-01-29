import { useEffect, useState } from "react";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

interface optionType {
  value: string;
  title: string;
}

const SelectOption = ({
  option,
  selectOption,
}: {
  option: optionType;
  selectOption: (value: string, title: string) => void;
}) => {
  const handleClick = () => {
    selectOption(option.value, option.title);
  };
  return (
    <button
      onClick={handleClick}
      className="w-full hover:bg-gray-200 whitespace-nowrap cursor-pointer p-5 py-[3px] border-b text-gray-800"
    >
      {option.title}
    </button>
  );
};

export const Select = ({
  options,
  selectedOption,
}: {
  options: optionType[];
  selectedOption: any;
}) => {
  const [selectedTitle, setSelectedTitle] = useState(options[0].title);
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  const [isOptionsVisible, setOptionsVisibility] = useState(false);

  useEffect(() => {
    selectedOption(selectedValue);
  }, [selectedValue]);

  const handleClick = () => {
    setOptionsVisibility(!isOptionsVisible);
  };
  const selectNewValue = (value: string, title: string) => {
    setSelectedValue(value);
    setSelectedTitle(title);
    handleClick();
  };

  return (
    <div className="relative">
      <button
        className="bg-gray-200 px-5 py-[3px] rounded-full whitespace-nowrap"
        title={selectedTitle}
        onClick={handleClick}
      >
        {selectedTitle}
        <ArrowDropDownRoundedIcon />
      </button>
      {isOptionsVisible && (
        <div className="absolute top-[35px] bg-gray-100 right-2 rounded-md w-fit">
          {options.length > 0 &&
            options.map((option, index) => (
              <SelectOption
                key={index}
                option={option}
                selectOption={selectNewValue}
              ></SelectOption>
            ))}
        </div>
      )}
    </div>
  );
};
