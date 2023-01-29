import type { BookingOrder, BookingOrderTableProps } from "@/types/booking";
import Image from "next/image";
import { SelectBox } from "components";
import { useEffect, useState } from "react";
import { AdTableProps, Advertisment } from "@/types/advert";

const SingleRow = ({
  ad,
  index,
  isSelected,
  selectRow,
}: {
  ad: Advertisment;
  index: number;
  isSelected: boolean;
  selectRow: (a: number, b: boolean) => void;
}) => {
  const statusClass = () => {
    switch (ad.status) {
      case "scheduled":
        return "bg-orange-500";
      case "ongoing":
        return "bg-green-500";
      case "paused":
        return "bg-red-500";
      case "completed":
        return "bg-blue-500";
      default:
        return "";
    }
  };
  const handleSelect = () => {
    selectRow(index, isSelected);
  };

  return (
    <div
      className={`w-full grid grid-cols-[.25fr_1fr_1.3fr_1fr_.5fr_.5fr_1fr] gap-2 cursor-pointer table_data_row text-center ${
        index % 2 === 0 && "bg-gray-200"
      } hover:bg-gray-400 ${isSelected && "bg-blue-300 hover:bg-blue-300"}`}
    >
      <SelectBox isSelected={isSelected} onClick={handleSelect} />
      <p>{ad.title}</p>
      <p className="capitalize">{ad.type}</p>
      <div>{new Date(ad.expiresAt).toDateString()}</div>
      <div>{ad.billed}</div>
      <div>{ad.budget}</div>
      <div
        className={`text-white capitalize ${statusClass()} text-sm w-fit px-3 py-2 rounded-lg`}
      >
        {ad.status}
      </div>
    </div>
  );
};

export const AdsTable = ({ data }: AdTableProps) => {
  const [selectedRow, setSelectedRow] = useState<boolean[]>([]);
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);
  useEffect(() => {
    const temp = [];
    for (let i = 0; i < data.rows.length; i++) {
      temp.push(false);
    }
    setSelectedRow(temp);
  }, []);

  useEffect(() => {
    console.log(selectedRow);
    if (selectedRow.every((v) => v === true)) {
      setIsAllSelected(true);
    } else {
      setIsAllSelected(false);
    }
  }, [selectedRow]);

  const handleSelect = () => {
    let temp;
    if (isAllSelected) {
      temp = selectedRow.map(() => false);
    } else {
      temp = selectedRow.map(() => true);
    }
    setSelectedRow(temp);
    setIsAllSelected(!isAllSelected);
  };

  const selectRow = (index: number, status: boolean) => {
    const temp = [...selectedRow];
    temp[index] = !status;
    setSelectedRow(temp);
  };

  return (
    <div className="w-full rounded-xl overflow-hidden pb-10">
      <div className="grid grid-cols-[.25fr_1fr_1.3fr_1fr_.5fr_.5fr_1fr] bg-dark text-white gap-2 text-center">
        <SelectBox
          className="self-center justify-self-center"
          isSelected={isAllSelected}
          onClick={handleSelect}
        />
        {data.headings.length > 0 &&
          data.headings.map((heading, index) => (
            <div className="py-4" key={index}>
              {heading}
            </div>
          ))}
      </div>
      <div className="bg-gray-100 text-sm">
        {data.rows.length > 0 &&
          data.rows.map((booking, index) => (
            <SingleRow
              ad={booking}
              key={index}
              index={index}
              isSelected={selectedRow[index]}
              selectRow={selectRow}
            />
          ))}
      </div>
    </div>
  );
};
