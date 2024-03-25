import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { navigationElements } from '../../../core/constants/navigation-elements.constant';
import { Router } from '@angular/router';
import { INavigationElement } from '../../../core/interfaces/navigation.interface';
import { APP_ROUTES } from '../../../core/enums/routes.enum';
import { MatBadgeModule } from '@angular/material/badge';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-bottom-bar-navigation',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
  ],
  templateUrl: './bottom-bar-navigation.component.html',
  styleUrl: './bottom-bar-navigation.component.scss',
})
export class BottomBarNavigationComponent {
  public navigationElements = navigationElements;

  constructor(private router: Router, private authService: AuthService) {
    const currentRoute = this.navigationElements.find(
      (element) => element.link === window.location.pathname.split('/').at(-1)
    );

    if (currentRoute) {
      this.setActivatedRoute(currentRoute);
    }
  }

  ngOnInit() {
    window.addEventListener('storage', (event) => {
      const cartItem = navigationElements.find(
        (element) => element.link === APP_ROUTES.CART
      )!;

      cartItem.badge = Number(this.authService.getItem<string>('CART'))!;
    });
  }

  onElementNavigationClick(element: INavigationElement) {
    this.router.navigate([APP_ROUTES.USER, element.link]);
    this.setActivatedRoute(element);
  }

  setActivatedRoute(element: INavigationElement) {
    this.navigationElements.forEach((element) => {
      element.isActive = false;
    });
    element.isActive = true;
  }
}
