import { Component, Input } from '@angular/core';
import { IProduct } from '../../../core/interfaces/product.interface';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, CurrencyPipe],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss',
})
export class CardProductComponent {
  @Input({ required: true }) product!: IProduct;
  constructor(private authService: AuthService) {}

  toggleFavorite() {
    this.product.favorite = !this.product.favorite;
  }

  toggleAdded() {
    this.product.added = !this.product.added;
    const cart = Number(this.authService.getItem('CART') ?? 0);
    const newCartNumber = this.product.added ? cart + 1 : cart - 1;
    this.authService.setItem('CART', newCartNumber);
    window.dispatchEvent(new Event('storage'));
  }
}
