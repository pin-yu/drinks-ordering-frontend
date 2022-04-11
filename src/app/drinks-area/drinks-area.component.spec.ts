import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksAreaComponent } from './drinks-area.component';

describe('DrinksAreaComponent', () => {
  let component: DrinksAreaComponent;
  let fixture: ComponentFixture<DrinksAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinksAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
