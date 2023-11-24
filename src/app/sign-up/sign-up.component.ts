import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import axios, { AxiosError } from 'axios';

interface SignUpDto {
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: '../styles/auth.css',
})
export class SignUpComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | undefined = undefined;

  constructor(private router: Router) {}

  async handleRegister() {
    if (this.password.length < 8 || !this.email.includes('@')) {
      this.errorMessage = 'Dados incorretos';
      return;
    }

    this.errorMessage = undefined;

    const body: SignUpDto = {
      email: this.email,
      password: this.password,
    };

    try {
      const response = await axios.post(
        'http://localhost:3000/auth/register',
        body
      );
      if (response.data === true) {
        this.router.navigate(['/login']);
      }
    } catch (error: any) {
      if (error instanceof AxiosError) {
        if (error.response?.data?.message)
          this.errorMessage = error.response.data.message;
        else this.errorMessage = 'Erro ao criar usuário';
      }
    }
  }
}
