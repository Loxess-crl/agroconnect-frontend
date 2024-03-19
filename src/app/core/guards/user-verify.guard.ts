import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { APP_ROUTES } from '../enums/routes.enum';

export const userVerifyGuard: CanActivateFn = (route, state) => {
  // const authService = inject(AuthService);
  // const router = inject(Router);
  // if (!authService.getCompleted()) {
  //   router.navigate([APP_ROUTES.VERIFICAR]);
  //   return false;
  // }
  return true;
};
