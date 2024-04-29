import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../../../shared/interfaces/product';
import { ListComponent } from '../../shared/classes/list.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends ListComponent {
  override listData: Product[] = [];
  override fetchData(): Observable<Product[]> {
    return this.dataService.fetchProducts();
  }
}
