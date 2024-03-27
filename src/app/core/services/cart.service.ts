import { Injectable } from '@angular/core';
import { syncProducts } from '../../pages/user/user-home/mocks/user-home.mocks';
import { syncBadge } from '../constants/navigation-elements.constant';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  setCartItemID(item_id: number) {
    const items = this.getCartItemsID();
    items.push(item_id.toString());

    localStorage.setItem('cart_items', items.join(','));
  }

  removeCartItemID(item_id: number) {
    const items = this.getCartItemsID();
    const newItems = items.filter((id) => id !== item_id.toString());
    syncProducts(newItems);
    syncBadge('CART', newItems.length);
    localStorage.setItem('cart_items', newItems.join(','));
  }
  getCartItemsID() {
    return (
      localStorage
        .getItem('cart_items')
        ?.split(',')
        .filter((prod) => prod !== '') || []
    );
  }

  clearCart() {
    localStorage.removeItem('cart_items');
  }
}
