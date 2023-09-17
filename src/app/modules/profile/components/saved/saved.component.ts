import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SavedImagesService } from 'src/app/core/services/savedimages.service';
import { ICarPicture } from 'src/app/shared/models/carro';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {
  constructor(private savedImagesService: SavedImagesService) {}
  userSavedImages$!: Observable<ICarPicture[]> 

  ngOnInit(): void {
    this.userSavedImages$ = this.savedImagesService.getUserSavedImage()
  }
}
