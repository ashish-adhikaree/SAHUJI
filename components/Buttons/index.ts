import dynamic from "next/dynamic";

export const Button_Var1 = dynamic(
  () => import("./button-1.component").then((mod) => mod.Button),
  { ssr: false }
);
