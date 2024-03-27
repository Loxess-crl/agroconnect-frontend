import { Injectable } from '@angular/core';
import { BASE_ENDPOINT, HTTP_OPTIONS, TOKEN_KEY } from '../../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Buffer } from 'buffer';
import {
  JWTRegisterModel,
  JWTRequestModel,
  JWTResponseModel,
} from '../interfaces/jwt.interface';
import { firstValueFrom } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

export type LocalStorageKey =
  | 'ID'
  | 'NAME'
  | 'AP'
  | 'AM'
  | 'EMAIL'
  | 'ROL'
  | 'LOGGED'
  | 'CART';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseEndpoint = BASE_ENDPOINT;
  private cabeceras: HttpHeaders;
  private authError = false;
  private isErrorModalOpen = false;

  constructor(
    private http: HttpClient,
    private router: Router // private firebaseAuthService: FirebaseAuthenticationService
  ) {
    this.cabeceras = HTTP_OPTIONS.headers;
  }

  public login(user: JWTRequestModel): Promise<JWTResponseModel> {
    return firstValueFrom(
      this.http.post<JWTResponseModel>(
        `${this.baseEndpoint}/auth/login`,
        user,
        {
          headers: new HttpHeaders({
            Accept: 'application/json',
          }),
        }
      )
    );
  }

  public loginFirebase(id_token: string, provider: string) {
    return firstValueFrom(
      this.http.post<JWTResponseModel>(
        `${this.baseEndpoint}/auth/firebase/login`,
        { id_token, provider },
        {
          headers: new HttpHeaders({
            Accept: 'application/json',
          }),
        }
      )
    );
  }

  public register(user: JWTRegisterModel): Promise<JWTResponseModel> {
    return firstValueFrom(
      this.http.post<JWTResponseModel>(
        `${this.baseEndpoint}/auth/register`,
        user,
        {
          headers: new HttpHeaders({
            Accept: 'application/json',
          }),
        }
      )
    );
  }

  public async verify(user: JWTRegisterModel): Promise<IUser> {
    return (
      await firstValueFrom(
        this.http.post<{ data: IUser }>(`/user/verify`, user)
      )
    ).data;
  }

  public isLoggedIn(): boolean {
    // return true;
    try {
      let tokenValid = this.checkToken();

      if (!tokenValid) {
        this.logout();
        return false;
      }
      return true;
    } catch (e) {
      this.logout();
      return false;
    }
  }

  private checkToken() {
    let userToken = this.getToken();
    return userToken;
  }

  public setToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  private encode(value: string | number | boolean): string {
    return Buffer.from(String(value)).toString('base64');
  }

  private decode(value: string): string {
    return Buffer.from(value, 'base64').toString('ascii');
  }

  public setItem(
    key: LocalStorageKey,
    value: string | number | boolean | null
  ): void {
    localStorage.setItem(key, value ? this.encode(value) : '');
  }

  public getItem<T extends string | number | boolean>(
    key: LocalStorageKey
  ): T | null {
    const item = localStorage.getItem(key);
    if (item) {
      return this.decode(item) as T;
    }
    return null;
  }

  public removeItem(key: LocalStorageKey): void {
    localStorage.removeItem(key);
  }

  public checkUrl(clear?: Boolean) {
    const url = window.location.href.split(window.location.host)[1];

    if (clear) {
      localStorage.clear();
    }
    if (url !== '/auth/login' && url !== '/') {
      this.setUrl(url);
    }
  }
  public setUrl(url: string): void {
    localStorage.removeItem('url');
    localStorage.setItem('url', url);
  }

  public getUrl(): string | null {
    return localStorage.getItem('url');
  }

  public async logout() {
    // if (!this.authError) {
    //   await firstValueFrom(
    //     this.http.post(`/auth/logout`, {
    //       headers: this.cabeceras,
    //     })
    //   );
    // }
    // const url = this.getUrl();
    // if (url) {
    //   localStorage.clear();
    //   this.setUrl(url);
    // } else {
    //   this.checkUrl(true);
    // }
    // this.firebaseAuthService.logOut();
    // this.router.navigate(['/auth/login']);
    localStorage.removeItem('LOGGED');
    this.router.navigate(['/']);
  }

  public refreshToken() {
    this.http.post(`${this.baseEndpoint}/auth/refresh`, {
      headers: this.cabeceras,
    });
  }

  public setAuthError(error: boolean) {
    this.authError = error;
  }

  public getAuthError() {
    return this.authError;
  }

  public setIsErrorModalOpen(isOpen: boolean) {
    this.isErrorModalOpen = isOpen;
  }

  public getIsErrorModalOpen() {
    return this.isErrorModalOpen;
  }
}
