import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductComponent } from "../products/product/product.component";

@Component({
  selector: 'app-basket',
  imports: [ProductComponent],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {
  @Input() basketProducts: any[] = [];
  @Output() onRemove = new EventEmitter<any>;
  
  remove($event: any) {
    this.onRemove.emit($event);
  }
}
