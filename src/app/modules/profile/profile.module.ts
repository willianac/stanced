import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MypicturesComponent } from './components/mypictures/mypictures.component';
import { SavedComponent } from './components/saved/saved.component';
import { CardPhotoModule } from 'src/app/shared/components/card-photo/card-photo.module';


@NgModule({
  declarations: [
    ProfileComponent,
    MypicturesComponent,
    SavedComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    CardPhotoModule
  ]
})
export class ProfileModule { }
