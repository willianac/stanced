import { Component, OnInit } from '@angular/core';
import { CarrosService } from 'src/app/core/services/carros.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  carros$!: any

  constructor(private carrosService: CarrosService) {}

  ngOnInit(): void {
    // this.carros$ = this.carrosService.retornaCarros()
    this.carrosService.retornaCarros().subscribe({
      next : (response) => {
        console.log(response.Contents)
        this.carros$ = response.Contents
      },
      error : (err) => console.error(err)
    })
  }
}
