import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import NewPictureService from "src/app/core/services/new-picture.service";

@Component({
	selector: "app-newpicture",
	templateUrl: "./new-picture.component.html",
	styleUrls: ["./new-picture.component.css"]
})
export class NewPictureComponent {
	photoForm = this.fb.group({
		file : ["", Validators.required],
		title: ["", Validators.required],
		description: ["", [Validators.maxLength(300)]],
		allowComments: [true]
	})

	file!: File

	constructor(private fb: FormBuilder, private NewPictureService: NewPictureService, private router: Router) {}

	uploadFoto() {
		const allowComments = this.photoForm.get("allowComments")?.value
		const formdata = new FormData()
		formdata.append("allowComments", allowComments ? "true" : "false")
		formdata.append("title", this.photoForm.get("title")?.value as string)
		formdata.append("description", this.photoForm.get("description")?.value as string)
		formdata.append("image", this.file)
		this.NewPictureService.sendNewPicture(formdata).subscribe({
			next : () => this.router.navigateByUrl("dashboard"),
			error : (err) => console.error(err)
		})
	}
}