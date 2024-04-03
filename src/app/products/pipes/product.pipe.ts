import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Pipe({
  name: 'filterProducts'
})

export class ProductPipe implements PipeTransform {
  transform(products: Product[], selectedBrands: string[] | string): Product[] {
    if (!products || !selectedBrands || selectedBrands.length === 0) {
      return products;
    }
    return products.filter(product => selectedBrands.includes(product.brand));
  }
}
