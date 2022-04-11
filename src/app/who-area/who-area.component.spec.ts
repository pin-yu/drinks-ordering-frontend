import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoAreaComponent } from './who-area.component';

describe('WhoAreaComponent', () => {
  let component: WhoAreaComponent;
  let fixture: ComponentFixture<WhoAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
