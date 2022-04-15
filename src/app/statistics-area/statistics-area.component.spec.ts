import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsAreaComponent } from './statistics-area.component';

describe('StatisticsAreaComponent', () => {
  let component: StatisticsAreaComponent;
  let fixture: ComponentFixture<StatisticsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
