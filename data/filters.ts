export type ProjectFilterOption = {
  id: string;
  label: string;
  categories?: string[];
};

export const PROJECT_FILTER_OPTIONS: ProjectFilterOption[] = [
  { id: "all", label: "All" },
  { id: "ux-ui-design", label: "UX/UI Design", categories: ["UX/UI Design"] },
  { id: "development", label: "Development", categories: ["Development"] },
  { id: "branding", label: "Branding", categories: ["Branding"] },
  {
    id: "visual-communication",
    label: "Visual Communication",
    categories: ["Visual Communication"],
  },
];
