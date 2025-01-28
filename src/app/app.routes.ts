import { Routes } from '@angular/router';
import { HomeComponent } from './+components/home/home.component';
import { LoginComponent } from './+components/login/login.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
