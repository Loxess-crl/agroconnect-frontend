export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  store: string;
  favorite?: boolean;
  added?: boolean;
}
