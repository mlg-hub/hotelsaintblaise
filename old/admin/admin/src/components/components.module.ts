import {
  MatSidenavModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [],
  imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule],
  exports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule],
})
export class MyOwnCustomMaterialModule { }
