import { Injectable } from '@angular/core';

@Injectable() // Not providedIn: 'root' to demonstrate Module encapsulation logic
export class TodoMcpService {
  private todos = [
    { id: 1, title: 'Analyze Project Structure (MCP)', completed: true },
    { id: 2, title: 'Generate NgModule', completed: true }
  ];

  getTodos() {
    return this.todos;
  }

  addTodo(title: string) {
    this.todos.push({ id: Date.now(), title, completed: false });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
