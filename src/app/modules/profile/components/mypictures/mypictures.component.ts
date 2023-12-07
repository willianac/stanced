import { Component, OnInit } from "@angular/core";
import { Observable, tap } from "rxjs";
import { TokenService } from "src/app/core/authentication/token.service";
import { PicturesService } from "src/app/core/services/pictures.service";
import { IPicture } from "src/app/shared/models/Picture";

@Component({
	selector: "app-mypictures",
	templateUrl: "./mypictures.component.html",
	styleUrls: ["./mypictures.component.css"]
})
export class MypicturesComponent implements OnInit {
	constructor(private tokenService: TokenService, private PicturesService: PicturesService) {}
	myPictures$!: Observable<IPicture[]>;

	public deleteImage(id: string) {
		this.PicturesService.deletePicture(id).pipe(
			tap(() => {
				const userID = this.tokenService.getDecodedToken().id;
				this.myPictures$ = this.PicturesService.getPicturesByUserId(userID)
			})
		).subscribe()
	}

	ngOnInit(): void {
		const userID = this.tokenService.getDecodedToken().id;
		this.myPictures$ = this.PicturesService.getPicturesByUserId(userID)
	}
}
