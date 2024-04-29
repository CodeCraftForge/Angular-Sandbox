import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../../../shared/interfaces/product';
import { ListComponent } from '../../shared/classes/list.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends ListComponent {
  override convertToInterface(item: any): Product {
    return {
      id: item.id,
      title: item.title,
      image: item.image
    }
  }
  override listData: Product[] = [];
  override fetchData(): Observable<Product[]> {
    return this.dataService.fetchProducts();
  }
}
