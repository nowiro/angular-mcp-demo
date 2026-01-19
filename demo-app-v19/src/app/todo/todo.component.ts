import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="todo-container">
      <h2>Todo List (No MCP)</h2>
      <div class="input-group">
        <input [(ngModel)]="newTodo" placeholder="Add new task">
        <button (click)="add()">Add</button>
      </div>
      <ul>
        <li *ngFor="let todo of todos">
          {{ todo.title }}
          <button (click)="remove(todo.id)">Delete</button>
        </li>
      </ul>
    </div>
  `
})
export class TodoComponent {
  newTodo = '';
  todos: any[] = [];

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  add() {
    if (this.newTodo) {
      this.todoService.add(this.newTodo);
      this.newTodo = '';
      this.todos = this.todoService.getTodos();
    }
  }

  remove(id: number) {
    this.todoService.remove(id);
    this.todos = this.todoService.getTodos();
  }
}
