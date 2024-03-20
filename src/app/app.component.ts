import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ICONS from '../assets/svg/icons';
import { RouterOutlet } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'agroconnect';

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit() {
    this.registerIcons();
  }

  private registerIcons() {
    const icons = Object.entries(ICONS);
    icons.forEach(([key, value]) => {
      const key_lower = key.toLowerCase();
      this.iconRegistry.addSvgIconLiteral(
        key_lower,
        this.sanitizer.bypassSecurityTrustHtml(value)
      );
    });
  }
}
