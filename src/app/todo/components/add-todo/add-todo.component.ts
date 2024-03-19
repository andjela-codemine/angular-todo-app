import { Component } from '@angular/core';
import { DataTodosService } from '../../services/dataTodos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  todo: string = '';

  constructor(private todosService: DataTodosService) {}

  addTodo(): void {
    if (this.todo.trim()) {
      this.todosService.addTodo(this.todo);
      this.todosService.getAllTodos();
      this.todo = '';
    }
  }
}
