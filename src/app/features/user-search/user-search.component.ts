import { Component, OnInit } from '@angular/core';
import { UserSearchService } from './services/user-search.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  user: UserDetail;
  userSubscription: Subscription;
  constructor(private userSearch: UserSearchService) { }

  ngOnInit() {
    this.userSubscription = this.userSearch.user$.subscribe(user => this.user = user);
  }

  selectUser(user: string) {
    this.userSearch.getUser(user);
  }

}
