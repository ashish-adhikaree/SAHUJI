import { Advertisements, PromoCode } from "sections";
import {
  ClassicSearchBar,
  Layout,
  PrimaryButton,
  PrimarySelect,
  SectionSelect,
} from "components";
import { useState } from "react";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

const Promotion = () => {
  const [selected, setSelected] = useState(0);
  const sections = ["advertisements", "promo codes"];
  const selectTime = [
    { value: "week", title: "This Week" },
    { value: "month", title: "This Month" },
    { value: "year", title: "This Year" },
    { value: "lifetime", title: "LifeTime" },
  ];
  const [selectedTime, setSelectedTime] = useState(selectTime[0].value);
  return (
    <Layout title="Promotion">
      <div className="space-y-5 mt-5">
        <SectionSelect
          sections={sections}
          selected={selected}
          setSelected={setSelected}
        />
        <div className="flex flex-col justify-center gap-4 md:flex-row md:items-center md:justify-between">
          <ClassicSearchBar placeholder={`Search for published ${sections[selected]}`} />
          <div className="flex items-center gap-2 ">
            <PrimarySelect
              options={selectTime}
              selectedOption={setSelectedTime}
              className="rounded-md px-[16px] py-[8px]"
            />
            <PrimaryButton
              className="bg-gray-200 rounded-md p-2 px-4"
              onClick={() => {}}
            >
              <AddCircleOutlineRoundedIcon className="text-dark" />
            </PrimaryButton>
          </div>
        </div>
        {selected === 0 && <Advertisements />}
        {selected === 1 && <PromoCode />}
      </div>
    </Layout>
  );
};

export default Promotion;
