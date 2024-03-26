import { Component } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../../core/interfaces/product.interface';
import { products } from '../user-home/mocks/user-home.mocks';
import { ButtonBackComponent } from '../../../shared/components/button-back/button-back.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface IProductCart extends IProduct {
  quantity: number;
  total_price: number;
}
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ButtonBackComponent, MatButtonModule, MatIconModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  public cartElements: IProductCart[];
  public totalCartPrice: number = 0;

  constructor(private cartService: CartService) {
    const itemsID = this.cartService.getCartItemsID();
    this.cartElements = products
      .filter((product) => itemsID.includes(product.id.toString()))
      .map((product) => {
        return {
          ...product,
          quantity: 1,
          total_price: product.new_price ?? product.price,
        };
      });
    this.calculateTotalCartPrice();
  }

  calculateTotalCartPrice() {
    this.totalCartPrice = this.cartElements.reduce(
      (acc, product) => acc + product.total_price,
      0
    );
  }

  increaseQuantity(product: IProductCart) {
    product.quantity++;
    product.total_price =
      (product.new_price ?? product.price) * product.quantity;
    this.calculateTotalCartPrice();
  }

  decreaseQuantity(product: IProductCart) {
    if (product.quantity > 1) {
      product.quantity--;
      product.total_price =
        (product.new_price ?? product.price) * product.quantity;
      this.calculateTotalCartPrice();
    }
  }

  removeProduct(productID: number) {
    this.cartService.removeCartItemID(productID);
    this.cartElements = this.cartElements.filter(
      (product) => product.id !== productID
    );
    this.calculateTotalCartPrice();
  }
}
