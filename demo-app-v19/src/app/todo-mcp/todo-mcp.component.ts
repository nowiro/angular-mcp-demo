import { Component } from '@angular/core';
import { TodoMcpService } from './todo-mcp.service';

@Component({
  selector: 'app-todo-mcp',
  template: `
    <div class="legacy-todo-container">
      <h2>Todo List (MCP Context: Legacy)</h2>
      <p><i>Generated matching existing NgModule architecture.</i></p>
      
      <div class="input-group">
        <input [(ngModel)]="newTodo" placeholder="Add task (Legacy Style)">
        <button (click)="add()">Add Task</button>
      </div>

      <ul class="todo-list">
        <li *ngFor="let todo of todos">
          <span [class.completed]="todo.completed">{{ todo.title }}</span>
          <button (click)="remove(todo.id)">Remove</button>
        </li>
      </ul>
    </div>
  `,
  standalone: false
})
export class TodoMcpComponent {
  newTodo: string = '';
  todos: any[] = [];

  constructor(private todoService: TodoMcpService) {
    this.refresh();
  }

  add() {
    if (!this.newTodo) return;
    this.todoService.addTodo(this.newTodo);
    this.newTodo = '';
    this.refresh();
  }

  remove(id: number) {
    this.todoService.deleteTodo(id);
    this.refresh();
  }

  private refresh() {
    this.todos = this.todoService.getTodos();
  }
}
