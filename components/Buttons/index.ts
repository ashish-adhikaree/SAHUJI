import dynamic from "next/dynamic";

export const PrimaryButton = dynamic(
  () => import("./primaryButton.component").then((mod) => mod.Button),
  { ssr: false }
);
export const ActionButton = dynamic(
  () => import("./actionButton.component").then((mod) => mod.ActionButton),
  { ssr: false }
);
