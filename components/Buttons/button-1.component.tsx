type arrowFunc = () => void;
interface propType {
  onClick: arrowFunc;
  title: string;
  isSelected: Boolean;
}

export const Button = ({ onClick, title = "button", isSelected }: propType) => {
  return (
    <button type="button" className={`button-style ${isSelected && "bg-gray-200"}`} onClick={onClick}>
      {title}
    </button>
  );
};
