type arrowFunc = () => void;
interface propType {
  onClick: arrowFunc;
  children: JSX.Element | string;
  isSelected?: Boolean;
  className?:string
}

export const Button = ({ children, onClick, isSelected = false, className }: propType) => {
  return (
    <button type="button" className={`button-style ${isSelected && "bg-gray-200"}  ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
