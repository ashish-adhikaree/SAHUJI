import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
interface SelectBoxProps {
  className?: string;
  isSelected: boolean;
  onClick: () => void;
}
export const SelectBox = ({
  className,
  isSelected,
  onClick,
}: SelectBoxProps) => {
  return (
    <div className={`cursor-pointer ${className} `} onClick={onClick}>
      {isSelected ? (
        <CheckBoxRoundedIcon />
      ) : (
        <CheckBoxOutlineBlankRoundedIcon />
      )}
    </div>
  );
};
