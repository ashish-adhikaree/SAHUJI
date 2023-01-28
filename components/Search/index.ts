import dynamic from "next/dynamic";

export const SearchBar_Var1 = dynamic(
  () => import("./searchBar-1.component").then((module) => module.SearchBar),
  { ssr: false }
);
