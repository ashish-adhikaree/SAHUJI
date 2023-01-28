import { ReactElement } from "react";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";

interface InfoCardProps {
  title: string;
  icon: ReactElement;
  value: string;
  change: number;
  gradient: "blue" | "purple";
}

const InfoCard = ({ title, icon, value, change, gradient }: InfoCardProps) => {
  return (
    <div
      className={`${gradient}_gradient w-full justify-self-center p-5 pb-0 rounded-[27px] text-center`}
    >
      <h1 className="uppercase text-xl">{title}</h1>
      <div className="">{icon}</div>
      <p className="text-6xl">{value}</p>
      <p className="py-3 flex items-center w-full justify-center">
        {change > 0 ? (
          <span className="flex items-center text-green-600">
            {Math.abs(change)}
            <ArrowUpwardRoundedIcon />
          </span>
        ) : (
          <span className="flex items-center text-red-600">
            {Math.abs(change)}
            <ArrowDownwardRoundedIcon />
          </span>
        )}
        <span>than yesterday</span>
      </p>
    </div>
  );
};

export default InfoCard;
