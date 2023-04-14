import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PhotoGridComponent } from './components/photo-grid/photo-grid.component';
import { CardPhotoComponent } from 'src/app/shared/components/card-photo/card-photo.component';
import { NewcarComponent } from './components/newcar/newcar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarpageComponent } from './components/carpage/carpage.component';


@NgModule({
  declarations: [DashboardComponent, PhotoGridComponent, CardPhotoComponent, NewcarComponent, CarpageComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardModule { }
