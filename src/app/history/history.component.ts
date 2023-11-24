import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent {
  zipCodes: string[] = ['CEP1', 'CEP2', 'CEP3', 'CEP4', 'CEP5'];
}
