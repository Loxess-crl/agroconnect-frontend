import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  isLoading: boolean = false;
  constructor(private authService: AuthService) {}

  onClickLogout() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.authService.logout();
    }, 2000);
  }
}
