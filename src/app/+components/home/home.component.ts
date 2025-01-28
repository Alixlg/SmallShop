import { Component, Input } from '@angular/core';
import { ProductsComponent } from "./products/products.component";
import { BasketComponent } from "./basket/basket.component";

@Component({
  selector: 'app-home',
  imports: [ProductsComponent, BasketComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isProductVisible: boolean = true;
  isBasketVisible: boolean = false;
  basketProducts: any[] = [];

  buy($event: any) {
    if (this.basketProducts.every(p => p != $event)) {
      this.basketProducts.push($event);
    }
    else {
      let product = this.basketProducts.find(p => p == $event);
      product.count += 1;
      this.basketProducts = this.basketProducts.filter(p => p != $event);
      this.basketProducts.push(product);
    }
  }

  remove($event: any) {
    if ($event.count == 1) {
      this.basketProducts = this.basketProducts.filter(p => p != $event);
    }
    else {
      let product = this.basketProducts.find(p => p == $event);
      product.count -= 1;
      this.basketProducts = this.basketProducts.filter(p => p != $event);
      this.basketProducts.push(product);
    }
  }
}
