import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-in-out-put',
  templateUrl: './in-out-put.component.html',
  styleUrls: ['./in-out-put.component.css']
})
export class InOutPutComponent {
  
  @Input() valor!:number;
  @Output() eventoMudou = new EventEmitter()
  
  
  incrementa() {
    this.valor++
    this.eventoMudou.emit({novoValor : this.valor})
  }
  
  decrementa() {
    this.valor--
    this.eventoMudou.emit({novoValor : this.valor})
  }
  
}
