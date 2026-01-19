import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoMcpService } from './todo-mcp.service';

@Component({
  selector: 'app-todo-mcp',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="modern-container">
      <h3>v21 Todo (With MCP Context - Signals)</h3>
      <p><i>Zoneless ready, Signals based.</i></p>
      
      <ul>
        <!-- New Control Flow @for -->
        @for (todo of todos(); track todo.id) {
          <li>
            <span>{{ todo.title }}</span>
            <button (click)="remove(todo.id)">🗑️</button>
          </li>
        }
      </ul>

      <div class="controls">
        <input 
          [ngModel]="newTask()" 
          (ngModelChange)="newTask.set($event)" 
          (keyup.enter)="add()" 
          placeholder="New Task (Signal Input)">
        
        <button (click)="add()">Add</button>
      </div>
      
      <div>Total: {{ count() }}</div>
    </div>
  `
})
export class TodoMcpComponent {
  private service = inject(TodoMcpService);
  
  // Signals exposed directly
  todos = this.service.todos;
  count = this.service.count;
  
  // Local signal for input
  newTask = signal('');

  add() {
    if (this.newTask()) {
      this.service.add(this.newTask());
      this.newTask.set('');
    }
  }

  remove(id: number) {
    this.service.remove(id);
  }
}
