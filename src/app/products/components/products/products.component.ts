import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] | undefined = [];
  currentPage = 1;
  totalItems = 120; //get from api
  itemsPerPage = 9;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts(this.itemsPerPage, this.currentPage)
      .subscribe(products => {
        if (Array.isArray(products)) {
          this.products = products;
        } else {
          console.error('Products data is not an array:', products);
        }
      });
  }

  pageChanged(): void {
    this.getProducts();
  }
}
