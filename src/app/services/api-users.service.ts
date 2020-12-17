import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../entity/User';

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {
  private _jsonURL = 'assets/List-users.json';
  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this._jsonURL);
  }


}
