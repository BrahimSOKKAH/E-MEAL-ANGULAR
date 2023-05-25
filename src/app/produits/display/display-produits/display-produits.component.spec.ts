import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProduitsComponent } from './display-produits.component';

describe('DisplayProduitsComponent', () => {
  let component: DisplayProduitsComponent;
  let fixture: ComponentFixture<DisplayProduitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayProduitsComponent]
    });
    fixture = TestBed.createComponent(DisplayProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
