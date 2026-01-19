import {Component} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
    selector: 'app-old-style',
    template: `
    <div>
      <h1>{{ title }}</h1>
      <ul>
        <li *ngFor="let item of items">{{ item }}</li>
      </ul>
      <button (click)="addItem()">Add Item</button>
    </div>
  `,
    standalone: false
})
export class OldStyleComponent {
    title = 'Angular v19 (Legacy Style)';
    items: string[] = [];

    constructor(private dataService: DataService) {
        this.items = this.dataService.getData();
    }

    addItem() {
        this.items.push('Nowy element ' + (this.items.length + 1));
    }
}
