import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../core/enums/routes.enum';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public nextPage = false;

  constructor(private router: Router) {}

  onClickNext() {
    this.nextPage = true;

    setTimeout(() => {
      this.router.navigate([APP_ROUTES.AUTH, APP_ROUTES.LOGIN]);
    }, 1000);
  }
}
