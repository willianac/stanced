import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CarrosService } from 'src/app/core/services/carros.service';
import { LikesService } from 'src/app/core/services/likes.service';
import { ICarPicture } from 'src/app/shared/models/carro';

const enterTr = transition(":enter", [
  style({
    opacity: 0
  }),
  animate("0.2s linear", style({ opacity: 1 })),
  query("@riseText", animateChild())
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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [fadeIn, fadeOut, riseText]
})
export class DashboardComponent implements OnInit{
  carros!: ICarPicture[]

  constructor(private carrosService: CarrosService, private likesService: LikesService) {}

  public like(id: number) {
    this.likesService.sendLike(id).subscribe()
  }

  ngOnInit(): void {
    this.carrosService.getCars().subscribe({
      next : (response) => {
        this.carros = response
      },
      error : (err) => console.error(err)
    })
  }
}