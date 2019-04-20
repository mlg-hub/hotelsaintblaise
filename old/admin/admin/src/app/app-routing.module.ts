import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './dashboard/dashboard/about/about.component';
import { ServicesComponent } from './dashboard/dashboard/services/services.component';
import { GalleryComponent } from './dashboard/dashboard/gallery/gallery.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

// const dashboard: Routes = [
//   {
//     path: 'dashboard',

//   }
// ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
