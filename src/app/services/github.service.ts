import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GithubService {
  baseUrl = 'https://api.github.com';

  constructor(private httpClient: HttpClient) {  }

  getSearchUsers(searchTerm: string): Observable<User[]> {
    return this.httpClient.get<any>(`${this.baseUrl}/search/users?q=${searchTerm}`)
      .map(response => response.items)
      .catch((e: any) => <any>console.error(e));
  }

  getUser(login: string): Observable<UserDetail> {
    return this.httpClient.get<any>(`${this.baseUrl}/users/${login}`)
      .catch((e: any) => <any>console.error(e))
  }
}
