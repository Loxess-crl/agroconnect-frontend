import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { APP_ROUTES } from '../enums/routes.enum';

export const checkLoginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (inject(AuthService).isLoggedIn()) {
    return true;
  }
  router.navigate([APP_ROUTES.AUTH, APP_ROUTES.LOGIN]);
  return false;
};
