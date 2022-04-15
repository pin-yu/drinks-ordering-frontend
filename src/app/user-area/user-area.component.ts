import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css']
})
export class UserAreaComponent implements OnInit {
  users: User[] = [];
  selectedUser? : User;
  userInputName?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  onSelect(who: User): void {
    this.selectedUser = who;
  }

  onClickBtn(): void {
    if (this.userInputName !== undefined && this.userInputName !== '') {
      this.userService.registerUser(this.userInputName).subscribe(users => this.users = users);
      this.resetUserInputName();
    }
  }

  resetUserInputName() {
    this.userInputName = '';
  }
}
