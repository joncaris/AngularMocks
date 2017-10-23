import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {  
  MatCardModule, 
  MatAutocompleteModule, 
  MatOptionModule,
  MatToolbarModule, 
  MatIconModule, 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
  } from '@angular/material'

import { AppComponent } from './app.component';
import { UserTypeaheadComponent } from './components/user-typeahead/user-typeahead.component';
import { UserSearchItemComponent } from './components/user-search-item/user-search-item.component';
import { UserComponent } from './components/user/user.component';
import { GithubService } from './services/github.service';
import { UserSearchService } from './features/user-search/services/user-search.service';
import { UserSearchComponent } from './features/user-search/user-search.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppContainerComponent } from './components/app-container/app-container.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTypeaheadComponent,
    UserSearchItemComponent,
    UserComponent,
    NavBarComponent,
    AppContainerComponent,
    UserSearchComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatOptionModule,
    MatInputModule
  ],
  providers: [GithubService, UserSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
