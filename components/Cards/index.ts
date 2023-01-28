import dynamic from "next/dynamic";

export const PrimaryInfoCard = dynamic(() =>
  import("./primaryInfoCard.component").then((mod) => mod.default),
  {ssr: false}
);
