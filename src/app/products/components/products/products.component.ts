import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  currentPage = 1;
  totalItems = 0;
  itemsPerPage = 9;
  inputSearch = '';

  selectedCategory: string | undefined;
  categories: string[] = [];
  selectedBrand = '';
  brands: string[] = [];

  categoriesChanged() {
    this.getProducts();
  }

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts(): void {
    this.productService.getProducts(this.itemsPerPage, this.currentPage, this.selectedCategory)
      .subscribe(products => {
        this.products = products;
        this.getBrands();
        this.getTotalNumberOfItems();
      });
  }

  pageChanged(): void {
    this.getProducts();
  }

  getCategories(): void {
    this.productService.getCategories().subscribe(categories => this.categories = categories);
  }

  getBrands(): void {
    const uniqueBrands: Set<string> = new Set<string>();
    this.products.forEach(product => {
      uniqueBrands.add(product.brand);
    });
    this.brands = Array.from(uniqueBrands);
  }

  getTotalNumberOfItems(): void {
    this.productService.getTotalItems(this.selectedCategory).subscribe(totalItems => this.totalItems = totalItems);
  }

  searchInputChanged(): void {
    this.productService.searchTerm(this.inputSearch).subscribe(products => this.products = products);
  }
}
