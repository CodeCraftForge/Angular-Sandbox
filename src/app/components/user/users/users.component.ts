import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../shared/interfaces/user';
import { ListComponent } from '../../shared/classes/list.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent extends ListComponent {
  override convertToInterface(item: any): User {
    return {
      id: item.id,
      name: item.name,
      username: item.username,
      email: item.email
    }
  }
  override listData: User[] = [];
  override fetchData(): Observable<User[]> {
    return this.dataService.fetchUsers();
  }
}
