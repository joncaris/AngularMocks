import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchItemComponent } from './user-search-item.component';

describe('UserSearchItemComponent', () => {
  let component: UserSearchItemComponent;
  let fixture: ComponentFixture<UserSearchItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
