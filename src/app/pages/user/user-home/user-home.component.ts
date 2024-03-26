import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  categories,
  featured,
  products,
  syncProducts,
} from './mocks/user-home.mocks';
import { CardProductComponent } from '../../../shared/components/card-product/card-product.component';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CardProductComponent],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.scss',
})
export class UserHomeComponent {
  public userName: string;
  public featured_images = featured;
  public categories = categories;
  public new_arrivals = products;
  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) {
    this.userName = this.authService.getItem('NAME') ?? 'Usuario';
    const items = this.cartService.getCartItemsID();
    this.authService.setItem('CART', items.length);
    syncProducts(items);
  }
}
