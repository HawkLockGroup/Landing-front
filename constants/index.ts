import { SidebarLink, HowItWorks, Features } from "@/types";

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
    position: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    heading: "Proposal Agreement",
    paragraph:
      "Alice lists her vintage watch on SEALSED, and Bob wants to buy it. They quickly settle on a price and choose Ether for payment. A secure escrow is set up, marking the start of their safe trade journey.",
  },
  {
    position: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 24,
    },
    heading: "Arbiter Engagement",
    paragraph:
      "Together, Alice and Bob pick Charlie, a trusted third party, to oversee the deal. Bob then locks the payment in escrow, signaling to Charlie that the transaction is ready to proceed with his oversight.",
  },
  {
    position: {
      top: 0,
      right: 24,
      bottom: 0,
      left: 0,
    },
    heading: "Seamless Transaction",
    paragraph:
      "Once Alice sends the watch, Bob checks and loves it, confirming its arrival to Charlie. This smooth step ensures everyone's on the same page, with SEALSED making sure things go as planned.",
  },
  {
    position: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    heading: "Fulfillment And Completion",
    paragraph:
      "Charlie gives the nod, the escrow releases the payment to Alice, and the deal is done. Alice is happy with her secure payment, and Bob enjoys his new vintage watch – a perfect trade finish on SEALSED.",
  },
];

export const features: Features[] = [
  {
    heading: "Robust Security",
    paragraph:
      "SEALSED prioritizes your asset safety above all. Leveraging state-of-the-art security protocols alongside robust smart contract technology, we ensure each transaction is not only secure but also transparently conducted, providing you with a fortress of trust and reliability around the clock.",
  },
  {
    heading: "Efficient Trading",
    paragraph:
      "Time is a valuable asset in trading, and SEALSED respects this. Our platform is engineered for speed, facilitating rapid transactions without compromising clarity or accuracy. Step into a world where efficiency meets precision, ensuring your trading experience is both swift and seamless.",
  },
  {
    heading: "Integrity in Arbitration",
    paragraph:
      "At SEALSED, integrity is the cornerstone of our community-driven arbitration process. Empower your transactions by choosing from a cadre of esteemed arbiters, committed to fairness and balance. Our democratic governance model is designed to reflect the collective voice of our users, fostering a transparent and equitable trading environment.",
  },
  {
    heading: "Reliable Asset Transfers",
    paragraph:
      "Experience the convenience of instant asset transfers with SEALSED. Our system is tailored for prompt and secure exchanges, minimizing wait times and maximizing trading efficacy. The SEALSED Token (HWT) anchors our ecosystem, offering a dependable and swift medium for all your transactional needs, epitomizing our commitment to a user-centric, secure trading platform.",
  },
];
