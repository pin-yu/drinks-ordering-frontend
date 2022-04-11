import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAreaComponent } from './check-area.component';

describe('CheckAreaComponent', () => {
  let component: CheckAreaComponent;
  let fixture: ComponentFixture<CheckAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
