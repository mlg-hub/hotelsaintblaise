import { DashboardRoutingModule } from './dashboard/dashboard/dashboard-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MyOwnCustomMaterialModule} from '../components/components.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './dashboard/dashboard/about/about.component';
import { ServicesComponent } from './dashboard/dashboard/services/services.component';
import { GalleryComponent } from './dashboard/dashboard/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
