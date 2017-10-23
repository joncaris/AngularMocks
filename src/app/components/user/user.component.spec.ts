import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `<app-user [user]="user"></app-user>`
})
class MockConsumer {
  user = {
    avatar_url: 'foo',
    html_url: 'bar',
    blog: 'foo.blog',
    location: 'foo, bar',
    name: 'foobar'
  };
}

describe('UserComponent', () => {
  let component: MockConsumer;
  let fixture: ComponentFixture<MockConsumer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent, MockConsumer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockConsumer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind user', () => {
    const userName = fixture.debugElement.query(By.css('.user-name')).nativeElement;
    fixture.detectChanges();

    expect(userName.innerText).toBe('foobar');
  });
});
