import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserInfoService } from 'src/app/core/authentication/user-info.service';

@Component({
  selector: 'app-change-userinfo-modal',
  templateUrl: './change-userinfo-modal.component.html',
  styleUrls: ['./change-userinfo-modal.component.css']
})
export class ChangeUserinfoModalComponent {
  @Input() editType!: "name" | "email";
  @Output() closeModalEvent = new EventEmitter();
  newName = "";
  newEmail = "";

  constructor(private userService: UserInfoService) {}

  public changeUserName() {
    if(this.newName.length) {
      this.userService.changeName(this.newName).subscribe({
        next: () => {
          this.closeModalEvent.emit()
          window.location.reload()
        },
        error: (err) => alert("Não foi possivel atualizar esse dado")
      })
    }
  }

  public changeEmail() {
    if(this.newEmail.length) {
      this.userService.changeEmail(this.newEmail).subscribe({
        next: () => {
          this.closeModalEvent.emit()
          window.location.reload()
        },
        error: (err) => alert("Não foi possivel atualizar esse dado")
      })
    }
  }
}
