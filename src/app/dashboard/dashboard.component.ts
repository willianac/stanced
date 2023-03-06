import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, debounceTime, finalize, fromEvent, interval, map, of, switchMap, take, tap, throwError } from 'rxjs';
import { RobotsService } from '../robots/robots.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
 
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private robots: RobotsService , private privaterouter: Router) {}


  onMudouValor(evento: Event) {
    console.log(evento)
  }
  
  inputForm = new FormControl()
  
  alterado$ = this.inputForm.valueChanges.pipe(
    debounceTime(500),
    tap(x => console.log(x)),
    catchError(() => throwError(() => console.log()))
  ).subscribe()
  

  // voltar() {
  //   this.source.subscribe({
  //     next : (valor) => console.log(valor)
  //   })
  // }
  
  ngOnInit(): void {
   
  }
}
