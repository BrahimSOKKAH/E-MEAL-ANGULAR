import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesCoursesComponent } from './listes-courses.component';

describe('ListesCoursesComponent', () => {
  let component: ListesCoursesComponent;
  let fixture: ComponentFixture<ListesCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListesCoursesComponent]
    });
    fixture = TestBed.createComponent(ListesCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
