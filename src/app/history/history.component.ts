import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Store } from '@ngrx/store';
import { CepHistory, HistoryState } from '../state/history.reducer';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent {
  private store = inject(Store);

  cepHistory: CepHistory[] = [];

  constructor() {
    this.store.select('history').forEach((value) => {
      this.cepHistory = value.ceps;
    });
  }

  zipCodes: string[] = ['CEP1', 'CEP2', 'CEP3', 'CEP4', 'CEP5'];
  datetime: Date = new Date();
}
