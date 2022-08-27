import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarDropdownComponent } from './nav-bar-dropdown.component';

describe('NavBarDropdownComponent', () => {
  let component: NavBarDropdownComponent;
  let fixture: ComponentFixture<NavBarDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
