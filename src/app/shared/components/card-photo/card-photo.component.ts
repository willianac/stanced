import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-photo',
  templateUrl: './card-photo.component.html',
  styleUrls: ['./card-photo.component.css']
})
export class CardPhotoComponent {
  @Input() url!:string
  @Input() description!: string
  @Input() username!: string
  showTooltip = false;
  showOverlay = false;
  shouldHeartBeFilled = false;
}
