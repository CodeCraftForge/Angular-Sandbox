import { Component } from '@angular/core';
import { ListComponent } from '../../shared/classes/list.component';
import { Product } from '../../../shared/interfaces/product';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends ListComponent {
  override listData: Product[] = [];
  override fetchData(): Observable<Product[]> {
    return this.dataService.fetchProducts();
  }
}
