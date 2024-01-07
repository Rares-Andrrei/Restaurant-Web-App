import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
  products: Product[] = [];

  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts(localStorage.getItem('token') ?? '').subscribe((data: any) => {
      this.products = data;
    });
  }
}
