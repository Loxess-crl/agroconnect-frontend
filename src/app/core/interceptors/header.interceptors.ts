import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { BASE_ENDPOINT, HTTP_OPTIONS } from '../../../config/config';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.authService.checkUrl();
    if (request.url.includes('auth') && !request.url.includes('logout'))
      return next.handle(request);
    // if(request.url.includes('apis.net')) return next.handle(request);

    const baseUrl = BASE_ENDPOINT;
    let headers = HTTP_OPTIONS.headers;

    const requestCorrect = request.clone({
      url: baseUrl + request.url,
      headers,
    });

    return next.handle(requestCorrect);
  }
}
