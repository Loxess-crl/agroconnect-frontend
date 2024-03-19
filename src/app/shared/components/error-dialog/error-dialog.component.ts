import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../core/services/auth.service';

const ERROR_MESSAGES: any = {
  401: 'Su sesión ha expirado, por favor, vuelva a iniciar sesión.',
  403: 'No tienes permisos para realizar esta acción.',
  404: 'No se ha encontrado el recurso solicitado.',
  429: 'Por favor, espere unos segundos antes de volver a intentarlo.',
  500: 'Ha ocurrido un error inesperado. Por favor, inténtelo de nuevo más tarde.',
  0: 'No se ha podido conectar con el servidor. Por favor, inténtelo de nuevo más tarde.',
};
const ERROR_MESSAGE_DEFAULT =
  'Ha ocurrido un error inesperado. Por favor, inténtelo de nuevo más tarde.';
@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatIconModule, MatButtonModule],
})
export class ErrorDialogComponent {
  private isInauth: boolean;
  public message: string;
  public title = 'Error';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { status: number; message: string; errors?: any },
    private authService: AuthService
  ) {
    this.isInauth = false;
    this.message = ERROR_MESSAGES[data.status];
    if (data.status === 401) {
      this.isInauth = true;
      authService.setAuthError(true);
      authService.setIsErrorModalOpen(true);
    } else if (data.status === 429) {
      this.title = '¡Demasiadas solicitudes!';
      authService.setIsErrorModalOpen(true);
    } else if (
      data.message &&
      !data.message.includes('SQLSTATE') &&
      data.status !== 403
    ) {
      if (data.status === 422) {
        const errorsObject = data.errors;

        let errorsArray = [];
        for (const key in errorsObject) {
          if (errorsObject.hasOwnProperty(key)) {
            errorsArray.push(errorsObject[key]);
          }
        }

        this.message = errorsArray.join(', ');
      } else {
        this.message = data.errors?.message ?? data.message;
      }
    } else {
      this.message = ERROR_MESSAGES[data.status] || ERROR_MESSAGE_DEFAULT;
    }
  }

  onConfirmar() {
    if (this.isInauth) {
      this.authService.setIsErrorModalOpen(false);
      this.authService.logout();
      this.authService.setAuthError(false);
      return;
    }
    if (this.data.status === 429) {
      this.authService.setIsErrorModalOpen(false);
      return;
    }
    window.location.reload();
    return;
  }

  extenderSesion() {
    this.authService.refreshToken();
  }
}
