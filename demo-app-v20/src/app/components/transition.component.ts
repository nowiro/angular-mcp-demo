import {Component} from '@angular/core';
import {DataService} from '../services/data.service';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-transition',
    standalone: true, // Angular v20 standard
    imports: [CommonModule],
    template: `
    <div>
      <h1>{{ title }}</h1>
      <ul>
        <!-- Używamy nowego @for, ale wciąż starego DataService -->
        @for (item of items; track item) {
          <li>{{ item }}</li>
        }
      </ul>
      <button (click)="addItem()">Add Item</button>
    </div>
  `
})
export class TransitionComponent {
    title = 'Angular v20 (Transition)';
    items: string[] = [];

    // Constructor injection wciąż działa, ale standalone: true
    constructor(private dataService: DataService) {
        this.items = this.dataService.getData();
    }

    addItem() {
        this.items.push('Nowy element ' + (this.items.length + 1));
    }
}
