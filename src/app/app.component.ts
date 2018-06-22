import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    products: Product[];
      constructor() {
          this.products = [
              new Product(
              'NICEH1',
              'A Nice Black Hat',
              '/assets/images/products/black-hat.jpg',
              ['Men', 'Accessories', 'Hats'],
              29.212),
              new Product(
                  'NEATOJACKET',
                  'A Nice green Hat',
              '/assets/images/products/black-hat.jpg',
                  ['Women', 'Apparel', 'Jackets & Vests'],
                  56.99),
              new Product(
                  'NICEHAT123',
                  'A Nice red Hat',
                  '/assets/images/products/black-hat.jpg',
                  ['Men', 'Accessories', 'Hats'],
                  19.99)
          ];
      }
      productWasSelected(product: Product) {
          console.log('Product was selected ', product);
      }
}
