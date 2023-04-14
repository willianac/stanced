import { Component, OnInit } from '@angular/core';
import { CarrosService } from 'src/app/core/services/carros.service';
import { ICarPicture } from 'src/app/shared/models/carro';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  carros!: ICarPicture[]

  constructor(private carrosService: CarrosService) {}

  ngOnInit(): void {
    this.carrosService.retornaCarros().subscribe({
      next : (response) => {
        this.carros = response
      },
      error : (err) => console.error(err)
    })
  }
}