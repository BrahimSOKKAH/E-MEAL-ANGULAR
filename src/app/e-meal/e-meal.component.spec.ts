import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMealComponent } from './e-meal.component';

describe('EMealComponent', () => {
  let component: EMealComponent;
  let fixture: ComponentFixture<EMealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EMealComponent]
    });
    fixture = TestBed.createComponent(EMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
