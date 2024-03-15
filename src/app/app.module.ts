import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgOptimizedImage } from '@angular/common';
import { FilterTodosPipe } from './pipes/filterTodos.pipe';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { DisplayTodoComponent } from './components/display-todo/display-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterTodosPipe,
    AddTodoComponent,
    DisplayTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
