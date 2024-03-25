import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ValidatorErrorMessagePipe } from '../../../shared/pipes/validator-error-message.pipe';

@Component({
  selector: 'app-register',
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
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
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
    setTimeout(() => {
      this.router.navigateByUrl('/home');
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
