import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { environment } from '../environments/environment.development';
import { isTokenValid } from './utils/isTokenValid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private router: Router) {
    this.shouldRender()
      .then((result) => {
        console.log(result);
        if (result === false) router.navigate(['/login']);
      })
      .catch(() => {});
  }

  get showNavbar(): boolean {
    return this.router.url !== '/login' && this.router.url !== '/sign-up';
  }

  async shouldRender(): Promise<boolean> {
    const token = window.localStorage.getItem(
      environment.LOCAL_STORAGE_TOKEN_KEY
    );

    if (!token) return false;

    return isTokenValid(token);
  }
}
