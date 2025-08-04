import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  name = '';
  price = 0;
  // obj:{name:string,price:number}[]=[]
  products: { name: string; price: number }[] = [];
  addProduct() {
    if (this.name == '') {
      alert('Enter the product name!!');
    } else if (this.price <= 0) {
      alert('Invalid product price!!');
    } else {
      this.products.push({ name: this.name, price: this.price });
    }
    this.name = '';
    this.price = 0;
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }

  updateProduct(index: number) {
    this.name = this.products[index].name;
    this.price = this.products[index].price;
    this.products.splice(index, 1);
  }
}
