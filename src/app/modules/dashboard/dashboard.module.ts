import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PhotoGridComponent } from './components/photo-grid/photo-grid.component';
import { CardPhotoComponent } from 'src/app/shared/components/card-photo/card-photo.component';


@NgModule({
  declarations: [DashboardComponent, PhotoGridComponent, CardPhotoComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
