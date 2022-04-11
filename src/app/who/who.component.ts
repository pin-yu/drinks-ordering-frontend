import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.css']
})
export class WhoComponent implements OnInit {
  who?: User;

  constructor() { }

  ngOnInit(): void {
  }

}
