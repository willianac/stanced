import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { CarrosService } from 'src/app/core/services/carros.service';
import { CommentsService } from 'src/app/core/services/comments.service';
import { DeleteCarService } from 'src/app/core/services/deletecar.service';
import { LikesService } from 'src/app/core/services/likes.service';
import { SavedImagesService } from 'src/app/core/services/savedimages.service';
import { ICarPicture } from 'src/app/shared/models/carro';

@Component({
  selector: 'app-carpage',
  templateUrl: './carpage.component.html',
  styleUrls: ['./carpage.component.css']
})
export class CarpageComponent {
  carID = this.route.snapshot.paramMap.get("id")
  carinfo!: ICarPicture
  commentInput = ""
  commentList = this.commentService.getComments(this.carID ?? "")

  constructor(
    private route: ActivatedRoute, 
    private carService: CarrosService, 
    private commentService: CommentsService,
    private deleteCarService: DeleteCarService,
    private savedImagesService: SavedImagesService,
    private likesService: LikesService
    ) {}

  sendComment() {
    if(this.commentInput.length > 3) {
      this.commentService.send(this.commentInput, Number(this.carID)).subscribe({
        next : (val) => {
          this.commentInput = ""
          this.commentList = from([val])
        },
        error : (err) => console.error(err)
      })
    }
  }

  like(photoid: number) {
    this.likesService.sendLike(photoid).subscribe()
  }

  deleteImage() {
    this.deleteCarService.delete(this.carID!).subscribe()
  }

  saveImage() {
    this.savedImagesService.saveImage(this.carID!).subscribe()
  }

  ngOnInit() {
    this.carService.getCars().subscribe({
      next : (response) => {
        this.carinfo = response.find(car => car.id === Number(this.carID)) as ICarPicture
      }
    })
  }
}