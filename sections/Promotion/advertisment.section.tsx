import { PrimarySelect, ClassicSearchBar, PrimaryButton, AdsTable } from "components";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { useState } from "react";
import { AdTableProps } from "@/types/advert";

export const Advertisements = () => {
  
  const data: AdTableProps["data"] = {
    headings: [
      "Campaign Title",
      "Type",
      "Expires At",
      "Billed",
      "Budget",
      "Status",
    ],
    rows: [
      {
        aid: 1,
        title: "Advert 1",
        type: "banner",
        expiresAt: Date.now() - 30 * 24 * 60 * 60 * 1000 * Math.random(),
        billed: 20,
        budget: 120,
        status: "ongoing",
      },
      {
        aid: 2,
        title: "Advert 2",
        type: "home",
        expiresAt: Date.now() - 30 * 24 * 60 * 60 * 1000 * Math.random(),
        billed: 20,
        budget: 120,
        status: "scheduled",
      },
      {
        aid: 3,
        title: "Third Advert",
        type: "search",
        expiresAt: Date.now() - 30 * 24 * 60 * 60 * 1000 * Math.random(),
        billed: 20,
        budget: 120,
        status: "completed",
      },
      {
        aid: 4,
        title: "home",
        type: "banner",
        expiresAt: Date.now() - 30 * 24 * 60 * 60 * 1000 * Math.random(),
        billed: 20,
        budget: 120,
        status: "paused",
      },
      
    ],
  };

  return (
    <div>
      <AdsTable data={data}/>
    </div>
  );
};
