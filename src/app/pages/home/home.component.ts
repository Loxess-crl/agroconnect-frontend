import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../core/enums/routes.enum';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public nextPage = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    if (this.authService.getItem('LOGGED')) {
      this.router.navigate([APP_ROUTES.USER]);
    }
  }

  onClickNext() {
    this.nextPage = true;

    setTimeout(() => {
      this.router.navigate([APP_ROUTES.AUTH]);
    }, 1000);
  }
}
