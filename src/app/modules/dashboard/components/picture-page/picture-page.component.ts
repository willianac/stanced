import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { from } from "rxjs"
import { TokenService } from "src/app/core/authentication/token.service"
import { PicturesService } from "src/app/core/services/pictures.service"
import { CommentsService } from "src/app/core/services/comments.service"
import { DeletePictureService } from "src/app/core/services/delete-car.service"
import { LikesService } from "src/app/core/services/likes.service"
import { SavedImagesService } from "src/app/core/services/savedimages.service"
import { IPicture } from "src/app/shared/models/Picture"

@Component({
	selector: "app-picture-page",
	templateUrl: "./picture-page.component.html",
	styleUrls: ["./picture-page.component.css"]
})
export class PicturePageComponent implements OnInit {
	pictureID = this.route.snapshot.paramMap.get("id")
	picture!: IPicture
	commentInput = ""
	commentList = this.commentService.getComments(this.pictureID ?? "")
	userid!: number

	constructor(
    private route: ActivatedRoute, 
    private carService: PicturesService, 
    private commentService: CommentsService,
    private DeletePictureService: DeletePictureService,
    private savedImagesService: SavedImagesService,
    private likesService: LikesService,
    private token: TokenService
	) {}

	sendComment() {
		if(this.commentInput.length > 3) {
			this.commentService.send(this.commentInput, Number(this.pictureID)).subscribe({
				next : (val) => {
					this.commentInput = ""
					this.commentList = from([val])
				},
				error : (err) => console.error(err)
			})
		}
	}

	handleLike(isPhotoAlreadyLiked: boolean, photoid: number) {
		if(isPhotoAlreadyLiked) {
			this.picture.shouldHeartBeFilled = false
			return this.likesService.removeLike(photoid).subscribe()
		}
		this.picture.shouldHeartBeFilled = true
		return this.likesService.sendLike(photoid).subscribe()
	}

	deleteImage() {
		this.DeletePictureService.delete(this.pictureID!).subscribe()
	}

	saveImage() {
		this.savedImagesService.saveImage(this.pictureID!).subscribe()
	}

	ngOnInit() {
		this.userid = this.token.getDecodedToken().id
		this.carService.getPictures().subscribe({
			next : (response) => {
				this.picture = response.find(car => car.id === Number(this.pictureID)) as IPicture
				this.picture.shouldHeartBeFilled = this.picture.didUserLiked ? true : false
			}
		})
	}
}