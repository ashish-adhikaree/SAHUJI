import dynamic from "next/dynamic";

export const AddPromoCodeForm = dynamic(
  () => import("./addPromoCode.component").then((mod) => mod.AddPromoCodeForm),
  { ssr: false }
);
