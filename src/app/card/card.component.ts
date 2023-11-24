import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input()
  textsFirstRow: string[] = [];

  @Input()
  textsSecondRow: string[] = [];

  @Input()
  datetime: Date = new Date();

  get time() {
    return `${this.datetime.getHours()}:${this.datetime.getMinutes()}`;
  }

  get date() {
    return `${this.datetime.getDate()}/${this.datetime.getMonth()}/${this.datetime.getFullYear()}`;
  }
}
