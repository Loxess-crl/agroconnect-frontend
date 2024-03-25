import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ValidatorErrorMessagePipe } from '../../../shared/pipes/validator-error-message.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { APP_ROUTES } from '../../../core/enums/routes.enum';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ValidatorErrorMessagePipe,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public loginForm: FormGroup;
  public msgEstado: string;
  public btnProcesar: Boolean;
  public hide: Boolean;
  public animationBack: Boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    // private firebaseAuth: FirebaseAuthenticationService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.msgEstado = '';
    this.btnProcesar = false;
    this.animationBack = false;
    this.hide = true;
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  backTo() {
    this.animationBack = true;
    setTimeout(() => {
      window.history.back();
    }, 500);
  }

  login() {
    this.btnProcesar = true;
    this.authService.setItem('NAME', 'Mamaguevo');
    setTimeout(() => {
      this.router.navigateByUrl(APP_ROUTES.USER);
    }, 2000);
    // this.authService.login(this.loginForm.value).then(
    //   (res) => {
    //     this._router.navigate(['/home']);
    //   },
    //   (error) => {
    //     this._snackBar.open('Error al iniciar sesión', 'Cerrar', {
    //       duration: 2000,
    //     });
    //     this.btnProcesar = false;
    //   }
    // );
  }
}
