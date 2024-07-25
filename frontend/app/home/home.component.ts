import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
  imports: [CommonModule, RouterModule]
})
export class HomeComponent {
  isVarliklarExpanded = false;
  isStokExpanded = false;
  isGuvenlikExpanded = false;
  isYonetimExpanded = false;
  isSistemKonfigurasyonuExpanded = false;
  isIsEmirleriExpanded = false;
  username: string | null = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.currentUsername.subscribe(username => this.username = username);
  }

  toggleVarliklar() {
    this.isVarliklarExpanded = !this.isVarliklarExpanded;
  }

  toggleStok() {
    this.isStokExpanded = !this.isStokExpanded;
  }

  toggleGuvenlik() {
    this.isGuvenlikExpanded = !this.isGuvenlikExpanded;
  }

  toggleYonetim() {
    this.isYonetimExpanded = !this.isYonetimExpanded;
  }

  toggleSistemKonfigurasyonu() {
    this.isSistemKonfigurasyonuExpanded = !this.isSistemKonfigurasyonuExpanded;
  }

  toggleIsEmirleri() {
    this.isIsEmirleriExpanded = !this.isIsEmirleriExpanded;
  }
  isAdmin(): boolean{
    
    return this.userService.getRole();
  }

  sidebarClass: string = 'col-2 sidebar';
  sidebarStyle: any = {};
}
