import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    sectionId: "home",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/work.svg",
    sectionId: "howItWorks",
    label: "How it works",
  },
  {
    imgURL: "/assets/icons/star.svg",
    sectionId: "features",
    label: "Features",
  },
  {
    imgURL: "/assets/icons/token.svg",
    sectionId: "token",
    label: "Token",
  },
  {
    imgURL: "/assets/icons/document.svg",
    sectionId: "docs",
    label: "Docs",
  },
];