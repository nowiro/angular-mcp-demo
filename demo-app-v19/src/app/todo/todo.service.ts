import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos = [{ id: 1, title: 'Learn Angular' }];

  getTodos() {
    return [...this.todos];
  }

  add(title: string) {
    this.todos.push({ id: Date.now(), title });
  }

  remove(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
