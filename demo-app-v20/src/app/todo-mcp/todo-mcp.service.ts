import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoMcpService {
  todos: Task[] = [
    { id: 1, title: 'Use Standalone Components' },
    { id: 2, title: 'Use @for control flow' }
  ];

  add(title: string) {
    this.todos.push({ id: Date.now(), title });
  }

  remove(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
