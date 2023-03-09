import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { ICarro } from '../core/carros/carro';
import { CarrosService } from '../core/carros/carros.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
 
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  constructor(private carService: CarrosService) {}
  carros$: Observable<ICarro[]> = this.carService.retornaCarros().pipe(
    tap(val => console.log(val))
  ) 
  
}
