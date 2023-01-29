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
      <div className="py-3 flex items-center w-full justify-center">
        {change > 0 ? (
          <div className="flex items-center text-green-600">
            {Math.abs(change)}
            <ArrowUpwardRoundedIcon />
          </div>
        ) : (
          <div className="flex items-center text-red-600">
            {Math.abs(change)}
            <ArrowDownwardRoundedIcon />
          </div>
        )}
        <span>than yesterday</span>
      </div>
    </div>
  );
};

export default InfoCard;
