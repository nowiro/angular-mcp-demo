import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private data: string[] = ['Element 1', 'Element 2'];

    getData() {
        return this.data;
    }
}
