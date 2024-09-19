export type InventoryDataType = {
  name: string;
  items: InventoryItemType[];
  bgColor: string;
};

export type InventoryItemType = {
  name: string;
  keyword1: string;
  keyword2: string;
};

export type QuickActionDataType = {
  id: string;
  text: string;
  imgSrc: string;
};

export type TeamDataType = {
  id: string;
  name: string;
  details: string;
  img: string;
};
