import { animate, style, transition, trigger } from "@angular/animations"
import { Component, OnDestroy, OnInit } from "@angular/core"
import { PicturesService } from "src/app/core/services/pictures.service"
import { LikesService } from "src/app/core/services/likes.service"
import { IPicture } from "src/app/shared/models/Picture"
import { Subscription } from "rxjs"

const enterTr = transition(":enter", [
	style({
		opacity: 0
	}),
	animate("0.2s linear", style({ opacity: 1 }))
])

const leaveTr = transition(":leave", [
	style({
		opacity: 1
	}),
	animate("0.2s linear", style({ opacity: 0 }))
])

const textAnimation = transition(":enter", [
	style({
		transform: "translateY(36px)"
	}),
	animate("0.06s linear", style({ transform: "translateY(0px)" }))
])

const fadeIn = trigger("fadeIn", [enterTr])
const fadeOut = trigger("fadeOut", [leaveTr])
const riseText = trigger("riseText", [textAnimation])

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.css"],
	animations: [fadeIn, fadeOut, riseText]
})
export class DashboardComponent implements OnInit, OnDestroy {
	pictures!: IPicture[]
	picturesSubscription!: Subscription

	constructor(private PicturesService: PicturesService, private likesService: LikesService) {}

	public handleLike(isPhotoAlreadyLiked: boolean, id: string) {
		if(isPhotoAlreadyLiked) {
			this.handleHeartIcon(id, "empty")
			return this.likesService.removeLike(id).subscribe()
		}
		this.handleHeartIcon(id, "fill")
		return this.likesService.sendLike(id).subscribe()
	}

	private handleHeartIcon(photoID: string, action: "fill" | "empty") {
		const updatedPictureList = this.pictures.map(car => {
			if(car.id === photoID) {
				if(action === "fill") return {...car, shouldHeartBeFilled: true}
				if(action === "empty") return {...car, shouldHeartBeFilled: false}
			}
			return car
		})
		this.pictures = updatedPictureList
	}

	ngOnInit(): void {
		this.picturesSubscription = this.PicturesService.getPictures().subscribe({
			next : (response) => {
				console.log(response)
				response.forEach(picture => {
					if(picture.didUserLiked) {
						picture.shouldHeartBeFilled = true
					} else {
						picture.shouldHeartBeFilled = false
					}
				})
				this.pictures = response
			},
			error : (err) => console.error(err)
		})
	}

	ngOnDestroy(): void {
		this.picturesSubscription.unsubscribe()
	}
}