import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-who-area',
  templateUrl: './who-area.component.html',
  styleUrls: ['./who-area.component.css']
})
export class WhoAreaComponent implements OnInit {
  users: User[] = [];
  selectedUser? : User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  onSelect(who: User): void {
    this.selectedUser = who;
  }
}
