import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoMcpComponent } from './todo-mcp.component';
import { TodoMcpService } from './todo-mcp.service';

@NgModule({
  declarations: [
    TodoMcpComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    TodoMcpService
  ],
  exports: [
    TodoMcpComponent
  ]
})
export class TodoMcpModule { }
