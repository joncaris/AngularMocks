import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchComponent } from './user-search.component';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { UserSearchService } from './services/user-search.service';
import { GithubService } from '../../services/github.service';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';


// class MockUserSearchService {
//   user$ = Observable.of({});
//   getUser() {}
// }

// @Component({
//   selector: 'app-user-typeahead',
//   template: `<div></div>`
// })
// class MockUserTypeahead {}

// @Component({
//  selector: 'mat-card',
//  template: `<div></div>`
// })
// class MockCard {}

// @Component({
//   selector: 'app-user',
//   template: `<div></div>`
// })
// class MockUser {
//   @Input() user;
// }

class MockHttpClient {
  get() {}
  post() {}
  //...
}

describe('UserComponent', () => {
  let component: UserSearchComponent;
  let fixture: ComponentFixture<UserSearchComponent>;

  class MockHttpClient {
    get() {}
    post() {}
    // ...
  }

  // ...

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        UserSearchComponent
       ],
       providers: [
         UserSearchService,
         GithubService,
         { provide: HttpClient, UserClass: MockHttpClient }
       ],
       schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('gets the user', () => {
    const userService = fixture.debugElement.injector.get(UserSearchService);
    spyOn(userService, 'getUser');

    component.selectUser('foobar');

    expect(userService.getUser).toHaveBeenCalledWith('foobar');
  })
});
