  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class signUpService {
    private apiUrl = 'https://localhost:7274/api/User'; 

    constructor(private http: HttpClient) { }

    createUser(user: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/create`, user);
    }
    checkUsername(username: string): Observable<boolean> {
      return this.http.get<boolean>(`${this.apiUrl}/checkUsername/${username}`);
    }
    getUserByUsername(username: string): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/getUserByUsername/${username}`);
    }
  }
