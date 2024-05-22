export enum VariantType {
  Color = "Color",
  StorageCapacity = "Storage Capacity",
}

export interface Variant {
  type: VariantType;
  value: string;
}

export interface Inventory {
  quantity: number;
  inStock: boolean;
}

export interface Product {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Variant[];
  inventory: Inventory;
}
