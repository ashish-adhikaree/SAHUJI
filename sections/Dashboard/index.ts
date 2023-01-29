import dynamic from "next/dynamic";
export { Popular } from "./popular.section";
export { QuickLinks } from "./quickLinks.section";
export { Summary } from "./summary.section";
export { Search } from "./search.section";

export const RecentBookings = dynamic(
  () => import("./recentBookings.section").then((mod) => mod.RecentBookings),
  { ssr: false }
);
