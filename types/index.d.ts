export interface SidebarLink {
  imgURL: string;
  sectionId: string;
  label: string;
}

export interface ParamsProps {
  params: { id: string };
}

export interface URLProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}
