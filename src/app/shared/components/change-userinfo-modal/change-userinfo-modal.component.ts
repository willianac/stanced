import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-change-userinfo-modal',
  templateUrl: './change-userinfo-modal.component.html',
  styleUrls: ['./change-userinfo-modal.component.css']
})
export class ChangeUserinfoModalComponent {
  @Input() editType!: "name" | "email"
  @Output() closeModalEvent = new EventEmitter()
}
