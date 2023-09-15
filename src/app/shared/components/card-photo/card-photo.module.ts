import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardPhotoComponent } from "./card-photo.component";

@NgModule({
  declarations: [CardPhotoComponent],
  imports: [CommonModule],
  exports: [CardPhotoComponent]
})
export class CardPhotoModule {}