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

export const products: IProduct[] = [
  {
    id: 1,
    name: 'Papa x 1Kg',
    description: 'Papa blanca',
    price: 2.5,
    images: [
      'https://th.bing.com/th/id/R.157f16026597d74db09e7a47e50e0347?rik=d%2ftnG670Bkv%2bWQ',
    ],
    category: 'Tubérculos',
    stock: 100,
    store: 'AgroPapa',
  },
  {
    id: 2,
    name: 'Saco de Trigo',
    description:
      'Saco de Trigo para que hagas cosas con trigo ns this is a description of the product nomas de prueba aa mejor hubiera sido un lorem ipsum',
    price: 15,
    images: [
      'https://th.bing.com/th/id/OIP.W4NOsVEbu_4EE3c539HaUQHaEc',
      'https://thumbs.dreamstime.com/b/granos-del-trigo-18991761.jpg',
      'https://th.bing.com/th/id/OIP.qwGTaCzY0xGKRfAFrSyEfAHaEc',
    ],
    category: 'Legúmbres',
    stock: 50,
    store: 'LegumbreSAC',
    isFavorite: true,
    discount: 20,
    rate: 4.5,
    new_price: 40,
    reviews: 50,
  },
  {
    id: 3,
    name: 'Yuca x 1Kg',
    description: 'Yuca xd',
    price: 3,
    images: ['https://directodelavega.cl/wp-content/uploads/2020/05/yuka.jpeg'],
    category: 'Tubérculos',
    stock: 70,
    store: 'TiendaRandom',
  },
];
