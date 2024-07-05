import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
@Input() title: string | undefined;
@Input() description: string | undefined;
@Input() image: string | undefined;
@Input() link: string | undefined;
}
