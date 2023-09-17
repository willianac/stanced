import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { MypicturesComponent } from './components/mypictures/mypictures.component';
import { SavedComponent } from './components/saved/saved.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {
    path: "",
    component: ProfileComponent,
    children: [
      {
        path: "mypictures",
        component: MypicturesComponent
      },
      {
        path: "saved",
        component: SavedComponent
      },
      {
        path: "settings",
        component: SettingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
