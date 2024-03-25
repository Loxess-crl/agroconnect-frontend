import { IProduct } from '../../../../core/interfaces/product.interface';

export const featured = [
  'https://i.pinimg.com/564x/4e/8b/93/4e8b9315aea42f03ee344006b89aa502.jpg',
  'https://i.pinimg.com/564x/26/9e/6b/269e6bdaffb1547b5d56a989f042f314.jpg',
  'https://i.pinimg.com/564x/87/74/6b/87746be06af9c0b9a2b769ee3a91b12f.jpg',
];

export const categories = [
  'Productos',
  'Vegetales',
  'Frutas',
  'Tubérculos',
  'Otros',
];

export const new_arrivals: IProduct[] = [
  {
    id: 1,
    name: 'Papa x 1Kg',
    description: 'Papa blanca',
    price: 2.5,
    image:
      'https://th.bing.com/th/id/R.157f16026597d74db09e7a47e50e0347?rik=d%2ftnG670Bkv%2bWQ',
    category: 'Tubérculos',
    stock: 100,
    store: 'AgroPapa',
  },
  {
    id: 2,
    name: 'Saco de Trigo',
    description: 'Saco de Trigo xd',
    price: 15,
    image: 'https://th.bing.com/th/id/OIP.W4NOsVEbu_4EE3c539HaUQHaEc',
    category: 'Legúmbres',
    stock: 50,
    store: 'LegumbreSAC',
    favorite: true,
  },
  {
    id: 3,
    name: 'Yuca x 1Kg',
    description: 'Yuca xd',
    price: 3,
    image: 'https://directodelavega.cl/wp-content/uploads/2020/05/yuka.jpeg',
    category: 'Tubérculos',
    stock: 70,
    store: 'TiendaRandom',
  },
];
