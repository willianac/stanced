import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent {
  @Input() marca!: string;
  @Input() modelo!: string;
  @Input() ano!: number;
  @Input() cor!: string;
  @Input() valor!: number 

  @Output() teste = new EventEmitter()

}
