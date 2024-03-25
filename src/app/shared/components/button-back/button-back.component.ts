import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-back',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './button-back.component.html',
  styleUrl: './button-back.component.scss',
})
export class ButtonBackComponent {
  constructor(private router: Router) {}
  /**
   * @description Ruta a la que se redirigirá al hacer click en el botón
   *@argument {string} route - Ruta a la que se redirigirá al hacer click en el botón. Si es 'back' se redirigirá a la página anterior
   */
  @Input({ required: true }) route: string = 'back';

  backTo() {
    if (this.route === 'back') {
      window.history.back();
    } else {
      this.router.navigate([`/${this.route}`]);
    }
  }
}
