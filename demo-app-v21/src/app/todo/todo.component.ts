import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class TodoService {
  private todosSubject = new BehaviorSubject<string[]>(['RxJS Task', 'AsyncPipe Task']);
  todos$ = this.todosSubject.asObservable();

  add(task: string) {
    const current = this.todosSubject.value;
    this.todosSubject.next([...current, task]);
  }
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <h3>v21 Todo (Without MCP - RxJS)</h3>
      <!-- Using AsyncPipe, common AI hallucination for simple state -->
      <ul>
        <li *ngFor="let todo of service.todos$ | async">
          {{ todo }}
        </li>
      </ul>
      <input [(ngModel)]="val">
      <button (click)="add()">Add</button>
    </div>
  `
})
export class TodoComponent {
  val = '';
  constructor(public service: TodoService) {}
  
  add() {
    if (this.val) {
      this.service.add(this.val);
      this.val = '';
    }
  }
}
