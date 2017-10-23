import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { UserSearchService } from '../../features/user-search/services/user-search.service';

@Component({
  selector: 'app-user-typeahead',
  templateUrl: './user-typeahead.component.html',
  styleUrls: ['./user-typeahead.component.css']
})
export class UserTypeaheadComponent implements OnInit {
  @Output() userSelected = new EventEmitter<User>();

  userControl: FormControl;
  filteredUsers: any;
  constructor(private userSearch: UserSearchService) { }

  ngOnInit() {
    this.userControl = new FormControl();
    this.userControl.valueChanges
      // .startWith(null)
      .debounceTime(300)
      .subscribe(user => {
        if(user && user.length > 3) {
          this.filteredUsers = this.findUsers(user)
        }
      });
  }

  findUsers(term: string): Observable<User[]>{
    return this.userSearch.searchUsers(term);
  }
}
