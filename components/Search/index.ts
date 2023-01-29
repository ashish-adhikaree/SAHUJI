import dynamic from "next/dynamic";

export const PrimarySearchBar = dynamic(
  () => import("./primarySearch.component").then((module) => module.SearchBar),
  { ssr: false }
);
export const ClassicSearchBar = dynamic(
  () => import("./classicSearch.component").then((module) => module.ClassicSearch),
  { ssr: false }
);
