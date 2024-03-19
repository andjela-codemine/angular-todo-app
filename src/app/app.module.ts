import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgOptimizedImage } from '@angular/common';
import { FilterTodosPipe } from './todo/pipes/filterTodos.pipe';
import { AddTodoComponent } from './todo/components/add-todo/add-todo.component';
import { DisplayTodoComponent } from './todo/components/display-todo/display-todo.component';
import { TodosComponent } from './todo/components/todos/todos.component';
import { QuotesComponent } from './quotes/components/quotes/quotes.component';
import { AppRoutingModule } from './app-routing.module';
import { QuoteComponent } from './quotes/components/quote/quote.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    FilterTodosPipe,
    AddTodoComponent,
    DisplayTodoComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgOptimizedImage,
    AppRoutingModule,
    QuoteComponent,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
