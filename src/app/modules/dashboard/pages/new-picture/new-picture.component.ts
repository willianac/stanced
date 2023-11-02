import { HttpEventType } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
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
		description: ["", [Validators.maxLength(2000)]],
		allowComments: [true]
	})

	file!: File
	progress = 0

	constructor(
		private fb: FormBuilder, 
		private picsService: PicturesService,
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
			next : (e) => {
				if(e.type === HttpEventType.UploadProgress) {
					const percentDone = Math.round((e.loaded / (e.total || 1)) * 100)
					this.progress = percentDone
				}
			},
			error : (err) => console.error(err),
			complete: () => {
				this.toast.success("Foto enviada com sucesso", "Enviada", { positionClass: "toast-top-left" })
				this.progress = 0
			}
		})
	}
}