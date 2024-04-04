import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NgSelectModule } from '@ng-select/ng-select';
import { ProductPipe } from './products/pipes/product.pipe';
import { ProductComponent } from './products/components/product/product.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormField, MatLabel } from '@angular/material/form-field';
import { AngularPhoneNumberInput } from 'angular-phone-number-input';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatBadge } from '@angular/material/badge';
import { MatChipOption } from '@angular/material/chips';

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
    PostPipe,
    ProductPipe
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
    InfiniteScrollModule,
    NgSelectModule,
    ProductComponent,
    ReactiveFormsModule,
    AngularPhoneNumberInput,
    MatSlideToggle,
    MatSelect,
    MatOption,
    MatLabel,
    MatFormField,
    MatBadge,
    MatChipOption
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { subscriptSizing: 'dynamic' } }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
