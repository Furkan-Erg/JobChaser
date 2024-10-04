import { Routes } from '@angular/router';
import { HomeComponent } from '../screens/home/home.component';
import { JoblistComponent } from '../screens/joblist/joblist.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'joblist', component: JoblistComponent },
];
