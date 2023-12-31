import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import axios, { AxiosError } from 'axios';
import { RouterLink, Router } from '@angular/router';
import { environment } from '../../environments/environment.development';

interface LoginDto {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: '../utilities/styles/auth.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | undefined = undefined;

  constructor(private router: Router) {}

  async handleLogin() {
    if (this.password.length < 8 || !this.email.includes('@')) {
      this.errorMessage = 'Dados incorretos';
      return;
    }

    const body: LoginDto = {
      email: this.email,
      password: this.password,
    };

    try {
      const response = await axios.post(
        'http://localhost:3000/auth/login',
        body
      );
      if (response.data != null) {
        window.localStorage.setItem(
          environment.LOCAL_STORAGE_TOKEN_KEY,
          response.data
        );
        this.router.navigate(['/search']);
      }
    } catch (error: any) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400)
          this.errorMessage = 'Dados incorretos';
        else if (error.response?.data?.message)
          this.errorMessage = error.response.data.message;
        else this.errorMessage = 'Erro no servidor';
      }
    }
  }
}
