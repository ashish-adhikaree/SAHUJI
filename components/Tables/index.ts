import dynamic from "next/dynamic";

export const PrimaryTable = dynamic(
  () => import("./primaryTable.component").then((mod) => mod.PrimaryTable),
  { ssr: false }
);
