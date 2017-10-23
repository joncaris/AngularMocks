import { Injectable } from '@angular/core';
import { GithubService } from '../../../services/github.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserSearchService {
  userSubject = new Subject<UserDetail>();
  user$ = this.userSubject.asObservable();
  selectedUser: UserDetail;

  constructor(private gitHubService: GithubService) { }

  searchUsers(searchTerm: string) {
    return this.gitHubService.getSearchUsers(searchTerm);
  }

  getUser(user: string) {
    return this.gitHubService.getUser(user)
      .subscribe(user => {
        if(user) {
          this.userSubject.next(user);
          this.selectedUser = user;
        }
      });
  }

}
