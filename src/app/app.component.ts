import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  list: Task[] = [];
  task: string = '';
  filteredList: Task[] = [];

  ngOnInit(): void {
    this.list = this.getAll();
    this.filterList();
  }

  add(): void {
    if (this.task.trim()) {
      const task: Task = {
        id: new Date().getTime(),
        description: this.task,
        isComplete: false
      };

      this.list.push(task);
      this.saveAndFilter();
      this.task = '';
    }
  }

  changeStatus(taskId: number, status: boolean): void {
    const index = this.list.findIndex(x => x.id === taskId);
    if (index !== -1) {
      this.list[index].isComplete = !status;
      this.saveAndFilter();
    }
  }

  delete(id: number): void {
    const index = this.list.findIndex(x => x.id === id);
    if (index !== -1) {
      this.list.splice(index, 1);
      this.saveAndFilter();
    }
  }

  deleteAll(): void {
    this.list = [];
    this.saveAndFilter();
  }

  saveAndFilter(): void {
    this.save(this.list);
    this.filterList();
  }

  save(list: Task[]): void {
    localStorage.setItem('todo', JSON.stringify(list));
  }

  getAll(): Task[] {
    const todos = localStorage.getItem('todo');
    return todos ? JSON.parse(todos) : [];
  }

  filterList(): void {
    this.filteredList = [ ...this.list ];
  }

  getActive(): void {
    this.filteredList = this.list.filter(task => !task.isComplete);
  }

  getCompleted(): void {
    this.filteredList = this.list.filter(task => task.isComplete);
  }

  clearCompleted(): void {
    this.list = this.list.filter(task => !task.isComplete);
    this.saveAndFilter();
  }
}
