import { APP_ROUTES } from '../enums/routes.enum';
import { INavigationElement } from '../interfaces/navigation.interface';

export const navigationElements: INavigationElement[] = [
  {
    name: 'Home',
    icon: 'home',
    isActive: false,
    link: APP_ROUTES.HOME,
    dependences: ['CLIENTE'],
    show: false,
  },
  {
    name: 'Explore',
    icon: 'manage_search',
    isActive: false,
    link: APP_ROUTES.EXPLORE,
    dependences: ['CLIENTE'],
    show: false,
  },
  {
    name: 'Cart',
    icon: 'shopping_cart',
    isActive: false,
    link: APP_ROUTES.CART,
    dependences: ['CLIENTE'],
    show: false,
    badge: 0,
  },
  {
    name: 'Profile',
    icon: 'account_circle',
    isActive: false,
    link: APP_ROUTES.PROFILE,
    dependences: ['none'],
    show: false,
  },
];
