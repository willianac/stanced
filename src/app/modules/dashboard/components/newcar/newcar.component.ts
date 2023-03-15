import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  uploadFoto() {
    const allowComments = this.photoForm.get("allowComments")?.value
    const description = this.photoForm.get("description")?.value
    const photoFile = this.file
    console.log({allowComments, description, photoFile})
  }
}
