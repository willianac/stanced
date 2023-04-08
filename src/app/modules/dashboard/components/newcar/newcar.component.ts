import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import NewCarService from 'src/app/core/services/newcar.service';

@Component({
  selector: 'app-newcar',
  templateUrl: './newcar.component.html',
  styleUrls: ['./newcar.component.css']
})
export class NewcarComponent {
  photoForm = this.fb.group({
    file : ["", Validators.required],
    description: ["", [Validators.required, Validators.maxLength(300)]],
    allowComments: [true]
  })

  file!: File

  constructor(private fb: FormBuilder, private newCarService: NewCarService) {}

  uploadFoto() {
    const allowComments = this.photoForm.get("allowComments")?.value
    const formdata = new FormData()
    formdata.append("comments", allowComments ? "true" : "false")
    formdata.append("description", this.photoForm.get("description")?.value as string)
    formdata.append("image", this.file)
    this.newCarService.sendNewCar(formdata)
  }
}
