import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { SavedImagesService } from "src/app/core/services/savedimages.service";
import { IPicture } from "src/app/shared/models/Picture";

@Component({
	selector: "app-saved",
	templateUrl: "./saved.component.html",
	styleUrls: ["./saved.component.css"]
})
export class SavedComponent implements OnInit {
	userSavedImages$ = this.savedImagesService.returnSavedImages()
  
	constructor(private savedImagesService: SavedImagesService, private toast: ToastrService) {}

	public removeFromSaved(picture: IPicture) {
		this.savedImagesService.removeSavedImage((picture.id).toString()).subscribe({
			next: () => this.toast.success("Foto removida da sua lista de salvos", "Removido", { positionClass: "toast-top-left" })
		})
	}

	ngOnInit(): void {
		this.savedImagesService.getUserSavedImage().subscribe()
	}
}
