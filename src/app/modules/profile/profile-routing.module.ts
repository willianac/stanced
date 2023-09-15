import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { MypicturesComponent } from './components/mypictures/mypictures.component';
import { SavedComponent } from './components/saved/saved.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
