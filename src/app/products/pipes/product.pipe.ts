import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Pipe({
  name: 'filterProducts'
})

export class ProductPipe implements PipeTransform {
  transform(products: Product[], selectedBrand: string): Product[] {
    return products.filter(product => product.brand.includes(selectedBrand));
  } // kako da filterujem vise opcija
}
