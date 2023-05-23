import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientQuantiteComponent } from './ingredient-quantite.component';

describe('IngredientQuantiteComponent', () => {
  let component: IngredientQuantiteComponent;
  let fixture: ComponentFixture<IngredientQuantiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientQuantiteComponent]
    });
    fixture = TestBed.createComponent(IngredientQuantiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
