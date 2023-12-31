import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  monthlyPayment: string;
  totalCost: string;
}

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss']
})
export class ProductCardsComponent {

  constructor(private router: Router) { }

  @Input() effect: any = {
      effect: false,
      ind: 0
  };

  activeCardIndex: number | null = null;

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15',
      image: 'assets/images/iphone15.jpeg',
      price: '$0 down today!',
      monthlyPayment: '$23.06/mo for 36 months',
      totalCost: 'or $829.99'
    },
    // Agrega más productos según sea necesario
  ];

  toggleDetails(index: number): void {
    this.activeCardIndex = this.activeCardIndex === index ? null : index;
  }

  goDetails(): void {
    this.router.navigate(['productDetails']);
  }
}
