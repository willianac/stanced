import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MypicturesComponent } from './components/mypictures/mypictures.component';
import { SavedComponent } from './components/saved/saved.component';
import { CardPhotoModule } from 'src/app/shared/components/card-photo/card-photo.module';
import { SettingsComponent } from './components/settings/settings.component';
import { ChangeUserInfoModal } from 'src/app/shared/components/change-userinfo-modal/change-userinfo-modal.module';
import { HeaderModule } from 'src/app/core/header/header.module';


@NgModule({
  declarations: [
    ProfileComponent,
    MypicturesComponent,
    SavedComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    CardPhotoModule,
    ChangeUserInfoModal,
    HeaderModule
  ]
})
export class ProfileModule { }
