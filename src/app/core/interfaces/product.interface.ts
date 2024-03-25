export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  discount?: number;
  new_price?: number;
  images: string[];
  category: string;
  stock: number;
  store: string;
  isFavorite?: boolean;
  rate?: number;
  reviews?: number;
  added?: boolean;
}
