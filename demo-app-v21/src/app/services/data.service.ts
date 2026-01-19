import {Injectable, signal} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    readonly data = signal<string[]>(['Element 1', 'Element 2']);

    add(item: string) {
        this.data.update(values => [...values, item]);
    }
}