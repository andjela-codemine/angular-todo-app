import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class DataTodosService {
  private readonly STORAGE_KEY = 'todo';
  private todos: Task[] = [];

  constructor() {
    this.loadTodosFromStorage();
  }

  private loadTodosFromStorage(): void {
    const storedTodos = localStorage.getItem(this.STORAGE_KEY);
    this.todos = storedTodos ? JSON.parse(storedTodos) : [];
  }

  private saveTodosToStorage(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
  }

  addTodo(todo: string): void {
    const task: Task = {
      id: new Date().getTime(),
      description: todo,
      isComplete: false
    };
    this.todos.push(task);
    this.saveTodosToStorage();
  }

  getAllTodos(): Task[] {
    return this.todos;
  }

  changeStatus(taskId: number, status: boolean): void {
    const index = this.todos.findIndex(x => x.id === taskId);
    if (index !== -1) {
      this.todos[index].isComplete = !status;
      this.saveTodosToStorage();
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(x => x.id !== id);
    this.saveTodosToStorage();
  }

  deleteAllTodos(): void {
    this.todos = [];
    this.saveTodosToStorage();
  }

  deleteCompletedTodos(): void {
    this.todos = this.todos.filter(task => !task.isComplete);
    this.saveTodosToStorage();
  }
}
