import { Component, EventEmitter, Output } from '@angular/core';
import { ProductComponent } from "./product/product.component";

@Component({
  selector: 'app-products',
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  @Output() onBuy = new EventEmitter<any>;

  products = [
    { id: 1001, brand: 'ریزر', title: 'کیبورد گیمینگ', price: '2200000', pic: '/Razer.png', count: 1 },
    { id: 1002, brand: 'لاجیتک', title: 'کیبورد گیمینگ', price: '2100000', pic: '/Razer.png', count: 1 },
    { id: 1003, brand: 'تسکو', title: 'کیبورد گیمینگ', price: '2500000', pic: '/Razer.png', count: 1 },
    { id: 1004, brand: 'لاجیتک', title: 'موس گیمینگ', price: '2290000', pic: '/Lajitec.png', count: 1 },
    { id: 1005, brand: 'ریزر', title: 'موس گیمینگ', price: '1800000', pic: '/Lajitec.png', count: 1 },
    { id: 1006, brand: 'ریزر', title: 'هدفن گیمینگ', price: '1900000', pic: '/Lajitec.png', count: 1 }
  ];

  buy($event: any) {
    this.onBuy.emit($event);
  }
}
