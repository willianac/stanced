import { animate, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { SavedImagesService } from "src/app/core/services/savedimages.service";
import { IPicture } from "src/app/shared/models/Picture";

const enterTransition = transition(":enter", [
	style({
		transform: "translateY(-36px)",
	}),
	animate("0.2s linear", style({transform: "translateY(0)"}))
])
const leaveTransition = transition(":leave", [
	style({
		transform: "translateY(0)"
	}),
	animate("0.1s linear", style({transform: "translateY(-36px)"}))
])

const fadeIn = trigger("enterTr", [enterTransition])
const fadeOut = trigger("leaveTr", [leaveTransition])

@Component({
	selector: "app-saved",
	templateUrl: "./saved.component.html",
	styleUrls: ["./saved.component.css"],
	animations: [fadeIn, fadeOut]
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
