import { Component, OnInit } from '@angular/core';
import { DataTodosService } from '../../services/dataTodos.service';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-display-todo',
  templateUrl: './display-todo.component.html',
  styleUrl: './display-todo.component.css'
})
export class DisplayTodoComponent implements OnInit {
  todos: Task[] = [];
  currentFilter: string = '';

  constructor(private todosService: DataTodosService) {}

  ngOnInit() {
    this.updateTodosList();
  }

  updateTodosList(): void {
    this.todos = this.todosService.getAllTodos();
  }

  changeStatus(todoId: number, todoStatus: boolean): void {
    this.todosService.changeStatus(todoId, todoStatus);
    this.updateTodosList();
  }

  deleteTodo(id: number): void {
    this.todosService.deleteTodo(id);
    this.updateTodosList();
  }

  deleteAllTodos(): void {
    this.todosService.deleteAllTodos();
    this.updateTodosList();
  }

  deleteCompletedTodos(): void {
    this.todosService.deleteCompletedTodos();
    this.updateTodosList();
  }
}
