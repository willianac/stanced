import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import NewCarService from "src/app/core/services/newcar.service";

@Component({
	selector: "app-newcar",
	templateUrl: "./newcar.component.html",
	styleUrls: ["./newcar.component.css"]
})
export class NewcarComponent {
	photoForm = this.fb.group({
		file : ["", Validators.required],
		title: ["", Validators.required],
		description: ["", [Validators.maxLength(300)]],
		allowComments: [true]
	})

	file!: File

	constructor(private fb: FormBuilder, private newCarService: NewCarService, private router: Router) {}

	uploadFoto() {
		const allowComments = this.photoForm.get("allowComments")?.value
		const formdata = new FormData()
		formdata.append("allowComments", allowComments ? "true" : "false")
		formdata.append("title", this.photoForm.get("title")?.value as string)
		formdata.append("description", this.photoForm.get("description")?.value as string)
		formdata.append("image", this.file)
		this.newCarService.sendNewCar(formdata).subscribe({
			next : () => this.router.navigateByUrl("dashboard"),
			error : (err) => console.error(err)
		})
	}
}