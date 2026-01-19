import {Component, inject, signal} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
    selector: 'app-modern',
    template: `
        <div>
            <h1>{{ title() }}</h1>
            <ul>
                @for (item of items(); track item) {
                    <li>{{ item }}</li>
                }
            </ul>
            <button (click)="addItem()">Add Item</button>
        </div>
    `,
    standalone: true
})
export class ModernComponent {
    title = signal('Nowoczesny Styl Angular v21');
    private dataService = inject(DataService);
    items = this.dataService.data; // Signal from service in v21+ practices

    addItem() {
        this.dataService.add('Nowy element ' + (this.items().length + 1));
    }
}