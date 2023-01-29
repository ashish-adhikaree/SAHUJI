import dynamic from "next/dynamic";

export const PrimaryPopup = dynamic(
  () => import("./primaryPopup.component").then((mod) => mod.PrimaryPopup),
  { ssr: false }
);
