import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Drink } from './entities/drink';
import { Sugar, Ice } from './entities/adjust';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private mockMenu: Drink[] = [
    {
      id: 0,
      name: "經典拿鐵",
      sugarsAdjustable:[Sugar.No, Sugar.Quarter],
      IcesAdjustable: [Ice.Hot, Ice.Normal],
      mediumPrice: 75
    },
    {
      id: 1,
      name: "經典黑咖啡",
      sugarsAdjustable:[Sugar.No, Sugar.Quarter],
      IcesAdjustable: [Ice.Hot, Ice.Normal],
      mediumPrice: 55
    },
    {
      id: 2,
      name: "香草拿鐵",
      sugarsAdjustable:[Sugar.No, Sugar.Quarter],
      IcesAdjustable: [Ice.Hot, Ice.Normal],
      mediumPrice: 85
    },
    {
      id: 3,
      name: "榛果拿鐵",
      sugarsAdjustable:[Sugar.No, Sugar.Quarter],
      IcesAdjustable: [Ice.Hot, Ice.Normal],
      mediumPrice: 85
    },
    {
      id: 4,
      name: "海鹽焦糖",
      sugarsAdjustable:[Sugar.No, Sugar.Quarter],
      IcesAdjustable: [Ice.Hot, Ice.Normal],
      mediumPrice: 85
    }
  ];

  constructor() { }

  getMenu(): Observable<Drink[]> {
    return of(this.mockMenu);
  }
}
