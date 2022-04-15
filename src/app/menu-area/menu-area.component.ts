import { Component, OnInit } from '@angular/core';
import { Drink } from '../entities/drink';
import { MenuService } from '../menu.service';
@Component({
  selector: 'app-menu-area',
  templateUrl: './menu-area.component.html',
  styleUrls: ['./menu-area.component.css']
})
export class MenuAreaComponent implements OnInit {
  menu?: Drink[];
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe(menu => this.menu = menu);
  }

}
