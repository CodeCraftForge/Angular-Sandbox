import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {
  @Input() data: any[] = [];
  columnNames: string[] = [];

  ngOnChanges() {
    if (this.data && this.data.length > 0) {
      this.columnNames = Object.keys(this.data[0]);
    }
  }
}
