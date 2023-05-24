import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRecetteComponent } from './display-recettes.component';

describe('DisplayComponent', () => {
  let component: DisplayRecetteComponent;
  let fixture: ComponentFixture<DisplayRecetteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayRecetteComponent]
    });
    fixture = TestBed.createComponent(DisplayRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
