import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPartenairesComponent } from './display-partenaires.component';

describe('DisplayPartenairesComponent', () => {
  let component: DisplayPartenairesComponent;
  let fixture: ComponentFixture<DisplayPartenairesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayPartenairesComponent]
    });
    fixture = TestBed.createComponent(DisplayPartenairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
