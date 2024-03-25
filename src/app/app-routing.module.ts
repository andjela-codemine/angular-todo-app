import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todo/components/todos/todos.component';
import { QuotesComponent } from './quotes/components/quotes/quotes.component';
import { ProductsComponent } from './products/components/products/products.component';
import { PostsComponent } from './posts/components/posts/posts.component';

const routes: Routes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: 'todo', component: TodosComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'posts', component: PostsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
