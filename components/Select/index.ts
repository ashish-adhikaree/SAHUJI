import dynamic from "next/dynamic";

export const PrimarySelect = dynamic(
  () => import("./select-v1.component").then((mod) => mod.Select),
  { ssr: false }
);
