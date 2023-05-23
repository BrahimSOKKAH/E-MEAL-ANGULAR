import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniatureRecetteComponent } from './miniature-recette.component';

describe('MiniatureRecetteComponent', () => {
  let component: MiniatureRecetteComponent;
  let fixture: ComponentFixture<MiniatureRecetteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniatureRecetteComponent]
    });
    fixture = TestBed.createComponent(MiniatureRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
