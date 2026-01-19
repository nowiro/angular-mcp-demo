import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoMcpService } from './todo-mcp.service';

@Component({
  selector: 'app-todo-mcp',
  standalone: true,
  imports: [FormsModule], // No CommonModule needed for @for
  template: `
    <div class="mcp-container">
      <h3>v20 Todo (With MCP Context)</h3>
      <p><i>Detects v20 -> Uses @for and inject()</i></p>
      
      <ul>
        @for (task of service.todos; track task.id) {
          <li>
            {{ task.title }}
            <button (click)="service.remove(task.id)">Done</button>
          </li>
        } @empty {
          <li>No tasks. Relax!</li>
        }
      </ul>

      <input [(ngModel)]="newTask" (keyup.enter)="add()" placeholder="New Task">
      <button (click)="add()">Add</button>
    </div>
  `
})
export class TodoMcpComponent {
  service = inject(TodoMcpService);
  newTask = '';

  add() {
    if (this.newTask) {
      this.service.add(this.newTask);
      this.newTask = '';
    }
  }
}
