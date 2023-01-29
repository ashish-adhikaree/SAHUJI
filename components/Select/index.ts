import dynamic from "next/dynamic";

export const PrimarySelect = dynamic(
  () => import("./primarySelect.component").then((mod) => mod.Select),
  { ssr: false }
);

export const SectionSelect = dynamic(
  () => import("./sectionSelect.component").then((mod) => mod.SectionSelect),
  { ssr: false }
);

export const SelectBox = dynamic(
  () => import("./selectBox.component").then((mod) => mod.SelectBox),
  { ssr: false }
);

