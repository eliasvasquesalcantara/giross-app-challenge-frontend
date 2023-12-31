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
  datetime: Date | undefined = undefined;

  limitTextsLength(arrStr: string[], n = 10) {
    return arrStr.map((text) => {
      if (text.length > n) return text.slice(0, n - 3) + '...';
      return text;
    });
  }

  get row1(): string[] {
    return this.limitTextsLength(this.textsFirstRow, 20);
  }

  get row2(): string[] {
    return this.limitTextsLength(this.textsSecondRow, 20);
  }

  get time() {
    if (this.datetime == null) return undefined;

    return `${this.datetime.getHours()}:${this.datetime.getMinutes()}`;
  }

  get date() {
    if (this.datetime == null) return undefined;

    return `${this.datetime.getDate()}/${this.datetime.getMonth()}/${this.datetime.getFullYear()}`;
  }
}
