import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: 'gallery',
        component: GalleryComponent,
      }
    ], canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
