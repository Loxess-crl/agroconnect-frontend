import { Routes } from '@angular/router';
import { APP_ROUTES } from './core/enums/routes.enum';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { checkLoginGuard } from './core/guards/check-login.guard';
import { userVerifyGuard } from './core/guards/user-verify.guard';

export const routes: Routes = [
  {
    path: APP_ROUTES.HOME,
    loadComponent() {
      return HomeComponent;
    },
  },
  {
    path: APP_ROUTES.AUTH,
    component: AuthComponent,
    children: [
      {
        path: APP_ROUTES.LOGIN,
        loadComponent() {
          return LoginComponent;
        },
      },
      {
        path: APP_ROUTES.REGISTER,
        loadComponent() {
          return RegisterComponent;
        },
      },
    ],
  },
  //   {
  //     path: APP_ROUTES.VERIFICAR,
  //     loadComponent() {
  //       return VerifyComponent;
  //     },
  //   },
  {
    path: '**',
    redirectTo: APP_ROUTES.HOME,
  },
];
