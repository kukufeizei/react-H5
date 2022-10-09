export interface MessageTypes {
  source: string;
  items: MessageItemTypes[];
}

export interface MessageItemTypes {
  title: string;
  content: string;
  icon: any;
  date?: string;
}

export interface PropsTypes {
  Item: MessageTypes[];
}
