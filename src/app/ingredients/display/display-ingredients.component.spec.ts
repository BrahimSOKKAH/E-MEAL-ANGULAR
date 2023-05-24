import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayIgredientComponent } from './display-ingredients.component';

describe('DisplayIgredientComponent', () => {
  let component: DisplayIgredientComponent;
  let fixture: ComponentFixture<DisplayIgredientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayIgredientComponent]
    });
    fixture = TestBed.createComponent(DisplayIgredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
