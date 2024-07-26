import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { item } from '../components/item.model';

@Component({
  selector: 'app-home',
  standalone: true,
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
  imports: [CommonModule, RouterModule,FormsModule]
})
export class HomeComponent {
  isVarliklarExpanded = false;
  isStokExpanded = false;
  isGuvenlikExpanded = false;
  isYonetimExpanded = false;
  isSistemKonfigurasyonuExpanded = false;
  isIsEmirleriExpanded = false;
  username: string | null = null;
  
  varliklar:item[] = [
    {ruoterLink:"varlik1", name:"Varlik 1"},
    {ruoterLink:"varlik2", name:"Varlik 2"}
  ]
  stok:item[] = [
    {ruoterLink:"stok1", name:"Stok 1"},
    {ruoterLink:"stok2", name:"Stok 2"}
  ]
  guvenlik:item[] = [
    {ruoterLink:"guvenlik1", name:"Guvenlik 1"},
    {ruoterLink:"guvenlik2", name:"Guvenlik 2"}
  ]
  isEmirleri:item[] = [
    {ruoterLink:"aks",name:"İş Emri İzleme - AKS"},
    {ruoterLink:"ats",name:"İş Emri İzleme - ATS"},
    {ruoterLink:"bs",name:"İş Emri İzleme - BS"},
    {ruoterLink:"kads-kats",name:"İş Emri İzleme - KADS/KATS"},
    {ruoterLink:"knl",name:"İş Emri İzleme - KNL"},
    {ruoterLink:"endeks-oku",name:"İş Emri İzleme - ENDEKS OKU"},
    {ruoterLink:"sa",name:"İş Emri İzleme - SA"}
  ]
  sistemKonfig:item[] = [
    {ruoterLink:"domain",name:"Domains"}
  ]
  yonetim:item[] = [
    {ruoterLink:"meslek-grubu",name:" Meslek Grupları"},
    {ruoterLink:"baslangic-merkezi",name:"Başlangıç Merkezi Şablonları"},
    {ruoterLink:"nesne-yapilandirma",name:"Nesne Yapılandırma"},
    {ruoterLink:"elemanlar",name:"Elemanlar"},
    {ruoterLink:"kisiler",name:"Kişiler"},
    {ruoterLink:"rapor-yoneticisi",name:"Rapor Yöneticisi"},
  ]
  

  constructor(private userService: UserService) {}

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
