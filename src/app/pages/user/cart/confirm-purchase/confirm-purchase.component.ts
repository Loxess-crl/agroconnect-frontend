import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-confirm-purchase',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    CurrencyPipe,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './confirm-purchase.component.html',
  styleUrl: './confirm-purchase.component.scss',
})
export class ConfirmPurchaseComponent {
  isLoading: boolean = false;
  constructor(
    private dialogRef: MatDialogRef<ConfirmPurchaseComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      totalCartPrice: number;
    }
  ) {}

  onClickAction(confirm: boolean) {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.dialogRef.close(confirm);
    }, 1000);
  }
}
