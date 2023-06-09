import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayMenusComponent } from './display-menus.component';


describe('DisplayMenusComponent', () => {
  let component: DisplayMenusComponent;
  let fixture: ComponentFixture<DisplayMenusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayMenusComponent]
    });
    fixture = TestBed.createComponent(DisplayMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
