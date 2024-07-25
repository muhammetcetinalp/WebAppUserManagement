import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usernameSource = new BehaviorSubject<string | null>(null);
  private isAdmin = false;

  currentUsername = this.usernameSource.asObservable();


  constructor() { }

  changeUsername(username: string) {
    this.usernameSource.next(username);
  }
  changeRole(role: boolean) {    
    this.isAdmin = role;
  }
  getRole(): boolean {
    return this.isAdmin;
  }
  
}
