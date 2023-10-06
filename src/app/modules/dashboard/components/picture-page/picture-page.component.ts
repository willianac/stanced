import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { TokenService } from "src/app/core/authentication/token.service"
import { PicturesService } from "src/app/core/services/pictures.service"
import { CommentsService } from "src/app/core/services/comments.service"
import { LikesService } from "src/app/core/services/likes.service"
import { SavedImagesService } from "src/app/core/services/savedimages.service"
import { IPicture } from "src/app/shared/models/Picture"
import { ToastrService } from "ngx-toastr"

@Component({
	selector: "app-picture-page",
	templateUrl: "./picture-page.component.html",
	styleUrls: ["./picture-page.component.css"]
})
export class PicturePageComponent implements OnInit {
	pictureID = this.route.snapshot.paramMap.get("id")
	picture!: IPicture
	commentInput = ""
	commentList$ = this.commentService.returnCommentsAsObservable()
	userid!: number

	constructor(
    private route: ActivatedRoute, 
    private picsService: PicturesService, 
    private commentService: CommentsService,
    private savedImagesService: SavedImagesService,
    private likesService: LikesService,
    private token: TokenService,
		private toast: ToastrService
	) {}

	sendComment() {
		if(this.commentInput.length > 3) {
			this.commentService.send(this.commentInput, this.pictureID as string).subscribe({
				next : () => {
					this.commentInput = ""
				},
				error : (err) => console.error(err)
			})
		}
	}

	handleLike(isPhotoAlreadyLiked: boolean, picture_id: string) {
		if(isPhotoAlreadyLiked) {
			this.picture.shouldHeartBeFilled = false
			return this.likesService.removeLike(picture_id).subscribe()
		}
		this.picture.shouldHeartBeFilled = true
		return this.likesService.sendLike(picture_id).subscribe()
	}

	deleteImage() {
		this.picsService.deletePicture(this.pictureID as string).subscribe()
	}

	saveImage() {
		this.savedImagesService.saveImage(this.pictureID as string).subscribe({
			next: () => {
				this.toast.success("Foto adicionada aos seus salvos", "Salvo", { positionClass: "toast-top-left" });
			}
		})
	}

	ngOnInit() {
		this.userid = this.token.getDecodedToken().id
		this.picsService.getPictures().subscribe({
			next : (response) => {
				this.picture = response.find(picture => picture.id === this.pictureID) as IPicture
				this.picture.shouldHeartBeFilled = this.picture.didUserLiked ? true : false
			}
		})
		this.commentService.getComments(this.pictureID as string).subscribe()
	}
}