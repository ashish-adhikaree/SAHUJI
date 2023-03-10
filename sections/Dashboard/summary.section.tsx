import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import ConfirmationNumberRoundedIcon from "@mui/icons-material/ConfirmationNumberRounded";
import { PrimaryInfoCard } from "components";

export const Summary = () => {
  return (
    <div className="grid grid-cols-2 gap-3 py-10">
      <PrimaryInfoCard
        title="revenue"
        value="200"
        change={20}
        gradient="blue"
        icon={<MonetizationOnRoundedIcon className="primaryInfoBox_icon" sx={{ fontSize: "3.75rem" }}/>}
      />
      <PrimaryInfoCard
        title="bookings"
        value="21"
        change={-2}
        gradient="purple"
        icon={<ConfirmationNumberRoundedIcon className="primaryInfoBox_icon text-6xl" sx={{ fontSize: "3.75rem" }}/>}
      />
    </div>
  );
};

