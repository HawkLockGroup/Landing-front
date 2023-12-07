import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/work.svg",
    route: "",
    label: "How it works",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "",
    label: "Features",
  },
  {
    imgURL: "/assets/icons/token.svg",
    route: "/jobs",
    label: "Token",
  },
  {
    imgURL: "/assets/icons/document.svg",
    route: "",
    label: "Docs",
  },
];
