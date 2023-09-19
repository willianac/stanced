import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SavedImagesService } from 'src/app/core/services/savedimages.service';
import { ICarPicture } from 'src/app/shared/models/carro';

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
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css'],
  animations: [fadeIn, fadeOut]
})
export class SavedComponent implements OnInit {
  constructor(private savedImagesService: SavedImagesService) {}
  userSavedImages$!: Observable<ICarPicture[]> 

  ngOnInit(): void {
    this.userSavedImages$ = this.savedImagesService.getUserSavedImage()
  }
}
