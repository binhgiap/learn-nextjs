export interface MenuType {
  title: string;
  href: string;
  id?: string;
}

export interface CategoryData {
  id: string;
  title: string;
  body: string;
}

export interface HomeData {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

export interface IdentifyData {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

export interface ShareData {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

export interface TrainData {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

export interface ListData<T, P> {
  data: T,
  menus: P
}

export interface Props {
  children?: string | JSX.Element | JSX.Element[] | React.ReactNode;
}
