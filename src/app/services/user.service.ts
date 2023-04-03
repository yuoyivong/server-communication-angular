import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericResponse } from '../models/generic-response';
import { User, UserRequest } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  BASE_URL = 'http://8.219.139.67:6654';

  constructor(private http: HttpClient) {}

  fetchAllUsers(): Observable<GenericResponse<User[]>> {
    return this.http.get<GenericResponse<User[]>>(
      `${this.BASE_URL}/api/v1/users?page=1&size=5`
    );
  }

  createUser(user: UserRequest): Observable<any> {
    return this.http.post(`${this.BASE_URL}/api/v1/users`, user);
  }
}
