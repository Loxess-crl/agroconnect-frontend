import { Routes } from '@angular/router';
import { APP_ROUTES } from './core/enums/routes.enum';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { checkLoginGuard } from './core/guards/check-login.guard';
import { userVerifyGuard } from './core/guards/user-verify.guard';
import { UserComponent } from './pages/user/user.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CartComponent } from './pages/user/cart/cart.component';
import { ExploreComponent } from './pages/user/explore/explore.component';

export const routes: Routes = [
  {
    path: '',
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
  {
    path: APP_ROUTES.USER,
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: APP_ROUTES.HOME,
      },
      {
        path: APP_ROUTES.HOME,
        loadComponent() {
          return UserHomeComponent;
        },
      },
      {
        path: APP_ROUTES.EXPLORE,
        loadComponent() {
          return ExploreComponent;
        },
      },
      {
        path: APP_ROUTES.CART,
        loadComponent() {
          return CartComponent;
        },
      },
      {
        path: APP_ROUTES.PROFILE,
        loadComponent() {
          return ProfileComponent;
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
    redirectTo: '',
  },
];
