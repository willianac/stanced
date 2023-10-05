import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { PicturesService } from "src/app/core/services/pictures.service";

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

	constructor(
		private fb: FormBuilder, 
		private picsService: PicturesService, 
		private router: Router, 
		private toast: ToastrService
	) {}

	uploadFoto() {
		const allowComments = this.photoForm.get("allowComments")?.value
		const formdata = new FormData()
		formdata.append("allowComments", allowComments ? "true" : "false")
		formdata.append("title", this.photoForm.get("title")?.value as string)
		formdata.append("description", this.photoForm.get("description")?.value as string)
		formdata.append("image", this.file)
		this.picsService.sendNewPicture(formdata).subscribe({
			next : () => {
				this.router.navigateByUrl("dashboard")
				this.toast.success("Foto enviada com sucesso", "Enviada", { positionClass: "toast-top-left" })
			},
			error : (err) => console.error(err)
		})
	}
}