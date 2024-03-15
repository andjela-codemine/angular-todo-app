import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: Task[], operation: string): Task[] {
    switch (operation) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter(task => !task.isComplete);
      case 'completed':
        return todos.filter(task => task.isComplete);
      default:
        return todos;
    }
  }

}
