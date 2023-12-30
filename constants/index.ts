import { SidebarLink, HowItWorks } from "@/types";

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

export const howItWorks: HowItWorks[] = [
  {
    heading: "Proposal Agreement",
    paragraph:
      "Alice lists her vintage watch on HawkLock, and Bob wants to buy it. They quickly settle on a price and choose Ether for payment. A secure escrow is set up, marking the start of their safe trade journey.",
  },
  {
    heading: "Arbiter Engagement",
    paragraph:
      "Together, Alice and Bob pick Charlie, a trusted third party, to oversee the deal. Bob then locks the payment in escrow, signaling to Charlie that the transaction is ready to proceed with his oversight.",
  },
  {
    heading: "Seamless Transaction",
    paragraph:
      "Once Alice sends the watch, Bob checks and loves it, confirming its arrival to Charlie. This smooth step ensures everyone's on the same page, with HawkLock making sure things go as planned.",
  },
  {
    heading: "Fulfillment And Completion",
    paragraph:
      "Charlie gives the nod, the escrow releases the payment to Alice, and the deal is done. Alice is happy with her secure payment, and Bob enjoys his new vintage watch – a perfect trade finish on HawkLock.",
  },
];
