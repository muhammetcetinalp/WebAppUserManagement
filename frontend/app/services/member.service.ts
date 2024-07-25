import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  
  private apiUrl = 'https://localhost:7274/api/User'; 
  private loggedIn = false;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getAllUsers`);
  }
  isLoggedIn(): boolean {
    return this.loggedIn;
  }
  setLoggedIn(value: boolean): void {
    this.loggedIn = value;
  }
  

   
}
