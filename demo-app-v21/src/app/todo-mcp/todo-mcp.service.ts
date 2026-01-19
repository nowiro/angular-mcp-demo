import { Injectable, signal, computed } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoMcpService {
  // Signal based state
  private todosSignal = signal<Todo[]>([
    { id: 1, title: 'Learn Signals' },
    { id: 2, title: 'Forget RxJS (mostly)' }
  ]);

  // Read-only signal exposed
  todos = this.todosSignal.asReadonly();
  
  // Computed signal
  count = computed(() => this.todosSignal().length);

  add(title: string) {
    this.todosSignal.update(todos => [
      ...todos, 
      { id: Date.now(), title }
    ]);
  }

  remove(id: number) {
    this.todosSignal.update(todos => todos.filter(t => t.id !== id));
  }
}
