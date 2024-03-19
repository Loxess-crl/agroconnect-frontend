import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  private errors_to_show = [401, 429];
  constructor(private dialog: MatDialog, private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        // return throwError(() => err);
        if (request.url.includes('login') || request.url.includes('logout'))
          return throwError(() => err);
        if (err.status === 404) {
          return throwError(() => err);
        }

        if (this.authService.getAuthError()) return throwError(() => err);

        if (err.status === 401) {
          this.authService.setAuthError(true);
        }
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
          status: err.status,
          message: err.message,
          errors: err.error,
        };
        if (
          this.errors_to_show.includes(err.status) &&
          !this.authService.getIsErrorModalOpen()
        ) {
          this.dialog.open(ErrorDialogComponent, dialogConfig);
        }
        return throwError(() => err);
      })
    );
  }
}
