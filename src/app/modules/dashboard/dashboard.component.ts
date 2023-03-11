import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarrosService } from 'src/app/core/services/carros.service';

import { ICarro } from 'src/app/shared/models/carro';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  carros$!: Observable<ICarro[]>

  constructor(private carrosService: CarrosService) {}

  ngOnInit(): void {
    this.carros$ = this.carrosService.retornaCarros()
  }
}
