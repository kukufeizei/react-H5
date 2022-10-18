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
  browse_count?: number;
  comment_count?: number;
  face_url?: string;
  image_list?: imageList[];
  like_count?: number;
  liked?: boolean;
  nickname?: string;
  publish_time?: string;
  term_id?: number;
  term_name?: string;
  text?: string;
  timeline_id?: number;
  title?: string;
  user_id?: number;
}

export interface imageList {
  height?: number;
  url?: string;
  width?: number;
}
