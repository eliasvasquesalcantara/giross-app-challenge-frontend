import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-search-zip-codes',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './search-zip-codes.component.html',
  styleUrl: './search-zip-codes.component.css',
})
export class SearchZipCodesComponent {
  zipCodes: string[] = ['CEP1', 'CEP2', 'CEP3', 'CEP4 '];

  async searchCeps() {
    const givenCEP = '44230000';
    try {
      const response = await fetch(`http://localhost:3000/cep/${givenCEP}`, {
        headers: {
          Authorization: 'Basic ZW1haWxuYW9jaGVnb3VAZ21haWwuY29tOlRlc3RAMTIz',
        },
      });
    } catch (error) {
    }
  }
}
