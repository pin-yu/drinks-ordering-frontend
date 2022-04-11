import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private mockUsers: User[] = [
    {name: '平郁'},
    {name: '瑞揚'}
  ]

  constructor() { }

  getUsers(): Observable<User[]> {
    const users = of(this.mockUsers);
    return users;
  }

}
