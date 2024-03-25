import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomBarNavigationComponent } from '../../shared/components/bottom-bar-navigation/bottom-bar-navigation.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterOutlet, BottomBarNavigationComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {}
