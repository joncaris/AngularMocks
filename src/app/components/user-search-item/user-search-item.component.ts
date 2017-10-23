import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-search-item',
  templateUrl: './user-search-item.component.html',
  styleUrls: ['./user-search-item.component.css']
})
export class UserSearchItemComponent {
  @Input() user: User;
}
