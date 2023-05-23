import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecettesFavoritesComponent } from './recettes-favorites.component';

describe('RecettesFavoritesComponent', () => {
  let component: RecettesFavoritesComponent;
  let fixture: ComponentFixture<RecettesFavoritesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecettesFavoritesComponent]
    });
    fixture = TestBed.createComponent(RecettesFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
