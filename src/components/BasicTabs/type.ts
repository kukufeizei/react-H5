export interface TabsItemType {
  title: string;
  count: number;
  key: string;
}

export interface PropsTypes {
  tabsItem?: TabsItemType[];
  tabsColor?: string;
  tabsTop?: number;
}

export interface ItemType {
  img?: string;
  title?: string;
  name?: string;
  count?: number;
}
