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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './products/components/products/products.component';
import { PostsComponent } from './posts/components/posts/posts.component';
import { PostComponent } from './posts/components/post/post.component';
import { PostPipe } from './posts/pipes/post.pipe';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    FilterTodosPipe,
    AddTodoComponent,
    DisplayTodoComponent,
    QuotesComponent,
    ProductsComponent,
    PostsComponent,
    PostPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgOptimizedImage,
    AppRoutingModule,
    QuoteComponent,
    HttpClientModule,
    NgbModule,
    PostComponent,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
