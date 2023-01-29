import dynamic from "next/dynamic";

export const BookingTable = dynamic(
  () => import("./bookingTable.component").then((mod) => mod.BookingTable),
  { ssr: false }
);

export const AdsTable = dynamic(
  () => import("./adsTable.component").then((mod) => mod.AdsTable),
  { ssr: false }
);
