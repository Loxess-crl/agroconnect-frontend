import { Component, Input } from '@angular/core';
import { IProduct } from '../../../core/interfaces/product.interface';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../core/services/auth.service';
import { MatRipple } from '@angular/material/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../../core/enums/routes.enum';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    CurrencyPipe,
    MatRipple,
  ],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss',
})
export class CardProductComponent {
  @Input({ required: true }) product!: IProduct;
  constructor(private authService: AuthService, private router: Router) {}

  toggleFavorite() {
    this.product.isFavorite = !this.product.isFavorite;
  }

  toggleAdded() {
    this.product.added = !this.product.added;
    const cart = Number(this.authService.getItem('CART') ?? 0);
    const newCartNumber = this.product.added ? cart + 1 : cart - 1;
    this.authService.setItem('CART', newCartNumber);
    window.dispatchEvent(new Event('storage'));
  }

  goToProduct() {
    this.router.navigate([APP_ROUTES.PRODUCT, this.product.id]);
  }
}
