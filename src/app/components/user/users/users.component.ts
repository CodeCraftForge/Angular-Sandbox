import { Component } from '@angular/core';
import { ListComponent } from '../../shared/classes/list.component';
import { Observable } from 'rxjs';
import { User } from '../../../shared/interfaces/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent extends ListComponent {
  override listData: User[] = [];
  override fetchData(): Observable<User[]> {
    return this.dataService.fetchUsers();
  }
}
