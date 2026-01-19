import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class TodoService {
  todos = ['Generic Task 1', 'Generic Task 2'];
  add(task: string) { this.todos.push(task); }
  remove(index: number) { this.todos.splice(index, 1); }
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <h3>v20 Todo (Without MCP)</h3>
      <!-- Using old control flow -->
      <div *ngFor="let todo of service.todos; let i = index">
        {{ todo }} <button (click)="service.remove(i)">X</button>
      </div>
      <input #inp><button (click)="add(inp.value); inp.value=''">Add</button>
    </div>
  `
})
export class TodoComponent {
  constructor(public service: TodoService) {}
  add(val: string) { if(val) this.service.add(val); }
}
