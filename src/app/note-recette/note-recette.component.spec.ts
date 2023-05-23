import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteRecetteComponent } from './note-recette.component';

describe('NoteRecetteComponent', () => {
  let component: NoteRecetteComponent;
  let fixture: ComponentFixture<NoteRecetteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteRecetteComponent]
    });
    fixture = TestBed.createComponent(NoteRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
