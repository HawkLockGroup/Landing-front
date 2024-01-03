export interface SidebarLink {
  imgURL: string;
  sectionId: string;
  label: string;
}

export interface HowItWorks {
  position: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  heading: string;
  paragraph: string;
}
export interface Features {
  heading: string;
  paragraph: string;
}
