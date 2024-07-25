import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home', 
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'baslangic-merkezi', loadComponent: () => import('./components/Yonetim/baslangic-merkezi.component').then(c => c.BaslangicMerkeziComponent) },
      { path: 'elemanlar', loadComponent: () => import('./components/Yonetim/elemanlar.component').then(c => c.ElemanlarComponent) },
      { path: 'kisiler', loadComponent: () => import('./components/Yonetim/kisiler.component').then(c => c.KisilerComponent) },
      { path: 'meslek-grubu', loadComponent: () => import('./components/Yonetim/meslek-grubu.component').then(c => c.MeslekGrubuComponent) },
      { path: 'nesne-yapilandirma', loadComponent: () => import('./components/Yonetim/nesne-yapilandirma.component').then(c => c.NesneYapilandirmaComponent) },
      { path: 'rapor-yoneticisi', loadComponent: () => import('./components/Yonetim/rapor-yoneticisi.component').then(c => c.RaporYoneticisiComponent) },
      
      { path: 'domain', loadComponent: () => import('./components/SistemKonfigurasyonu/domain.component').then(c => c.DomainComponent) },

      { path: 'aks', loadComponent: () => import('./components/IsEmirleri/aks.component').then(c => c.AKSComponent) },
      { path: 'ats', loadComponent: () => import('./components/IsEmirleri/ats.component').then(c => c.ATSComponent) },
      { path: 'bs', loadComponent: () => import('./components/IsEmirleri/bs.component').then(c => c.BSComponent) },
      { path: 'endeks-oku', loadComponent: () => import('./components/IsEmirleri/endeks-oku.component').then(c => c.EndeksOkuComponent) },
      { path: 'kads-kats', loadComponent: () => import('./components/IsEmirleri/kads-kats.component').then(c => c.KADSKATSComponent) },
      { path: 'knl', loadComponent: () => import('./components/IsEmirleri/knl.component').then(c => c.KNLComponent) },
      { path: 'sa', loadComponent: () => import('./components/IsEmirleri/sa.component').then(c => c.SAComponent) },




    ]
  },
  { path: 'login', loadComponent: () => import('../app/login/login.component').then(m => m.LoginComponent) },
  { path: 'signup', loadComponent: () => import('../app/signup/signup.component').then(c => c.SignupComponent)},
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
