import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private basePath = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUser(id: string): Observable<User[]> {
    let params = new HttpParams().set('id', id);

    return this.http.get<User[]>(this.basePath + '/users', { params });
  }
}
