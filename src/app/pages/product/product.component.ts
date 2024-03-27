import { Component } from '@angular/core';
import { ButtonBackComponent } from '../../shared/components/button-back/button-back.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { AuthService } from '../../core/services/auth.service';
import { products } from '../user/user-home/mocks/user-home.mocks';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../core/interfaces/product.interface';
import { APP_ROUTES } from '../../core/enums/routes.enum';
import { ImageSliderComponent } from '../../shared/components/image-slider/image-slider.component';
import { CurrencyPipe } from '@angular/common';
import { MatRipple } from '@angular/material/core';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    ButtonBackComponent,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    ImageSliderComponent,
    CurrencyPipe,
    MatRipple,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  public cartNumber: number;
  public product!: IProduct;
  private productId: number;
  private products = products;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.cartNumber = Number(this.authService.getItem<string>('CART'));
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    if (isNaN(this.productId)) {
      this.router.navigate([APP_ROUTES.USER]);
    } else {
      this.getProductById();
      window.addEventListener('storage', (event) => {
        this.cartNumber = Number(this.authService.getItem<string>('CART'))!;
      });
    }
  }

  getProductById() {
    this.product = this.products.find(
      (product) => product.id === this.productId
    )!;
  }

  onFavoriteChange() {
    this.product.isFavorite = !this.product.isFavorite;
  }

  onChangeAddCart() {
    if (this.product.added) {
      this.cartNumber--;
      this.authService.setItem('CART', this.cartNumber.toString());
      this.cartService.removeCartItemID(this.product.id);
      this.product.added = false;
    } else {
      this.cartNumber++;
      this.authService.setItem('CART', this.cartNumber.toString());
      this.cartService.setCartItemID(this.product.id);
      this.product.added = true;
    }
  }
  goToCart() {
    this.router.navigate([APP_ROUTES.USER, APP_ROUTES.CART]);
  }
}
