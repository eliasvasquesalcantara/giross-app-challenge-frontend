import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { environment } from '../../environments/environment.development';
import { FormsModule } from '@angular/forms';
import axios, { AxiosError } from 'axios';
import { Cep } from '../utilities/types/cep';


@Component({
  selector: 'app-search-zip-codes',
  standalone: true,
  imports: [CommonModule, CardComponent, FormsModule],
  templateUrl: './search-zip-codes.component.html',
  styleUrl: './search-zip-codes.component.css',
})
export class SearchZipCodesComponent {
  ceps: Cep[] = [];

  range: string = '';
  cep: string = '';
  errorMsg: string | undefined = undefined;

  async searchCeps() {
    this.errorMsg = undefined;
    try {
      const token = window.localStorage.getItem(
        environment.LOCAL_STORAGE_TOKEN_KEY
      );
          
      const response = await axios.get(
        `http://localhost:3000/cep?cep=${this.cep}&km=${this.range}`,
        {
          headers: {
            Authorization: `Basic ${token}`,
          },
        }
      );

      this.ceps = response.data
      console.log(`response ${JSON.stringify(response)}`);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.data?.message)
          this.errorMsg = error.response.data.message;
        else this.errorMsg = 'Erro ao buscar CEPs';
      }
    }
  }
}
