import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../../../shared/interfaces/product';
import { ListComponent } from '../../shared/classes/list.component';
import { DataTableComponent } from '../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends ListComponent {
  override convertToInterface(item: any): Product {
    return {
      id: item.id,
      title: item.title,
      price: item.price
    }
  }
  override listData: Product[] = [];
  override fetchData(): Observable<Product[]> {
    return this.dataService.fetchProducts();
  }
}
