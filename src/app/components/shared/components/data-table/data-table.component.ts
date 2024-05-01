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
  sortedColumn!: string;
  sortDirection: 'asc' | 'desc' = 'asc';

  ngOnChanges() {
    if (this.data && this.data.length > 0) {
      this.columnNames = Object.keys(this.data[0]);
      this.sortBy(this.columnNames[0]);
    }
  }

  sortBy(columnName: string) {
    if (this.sortedColumn === columnName) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = columnName;
      this.sortDirection = 'asc';
    }
    this.sortData();
  }

  private sortData() {
    if (this.sortedColumn && this.data) {
      const allColumnDataAreNumbers = this.checkAllColumnDataAreNumbers();
      this.data.sort((a, b) => {
        let aValue = allColumnDataAreNumbers === true ? Number(a[this.sortedColumn]) : a[this.sortedColumn];
        let bValue = allColumnDataAreNumbers === true ? Number(b[this.sortedColumn]) : b[this.sortedColumn];
        if (aValue < bValue) {
          return this.sortDirection === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return this.sortDirection === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
  }

  private checkAllColumnDataAreNumbers(): boolean {
    return this.data.every(v => '' + Number(v[this.sortedColumn]) === v[this.sortedColumn]);
  }
}
