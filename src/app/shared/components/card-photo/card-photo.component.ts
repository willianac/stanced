import { Component, Input } from '@angular/core';
import { ICarro } from '../../models/carro';

@Component({
  selector: 'app-card-photo',
  templateUrl: './card-photo.component.html',
  styleUrls: ['./card-photo.component.css']
})
export class CardPhotoComponent {
  @Input() url!:string
  @Input() alt!: string
  // @Input() car!: ICarro
}
