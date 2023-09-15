import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/core/authentication/token.service';
import { CarrosService } from 'src/app/core/services/carros.service';
import { ICarPicture } from 'src/app/shared/models/carro';

@Component({
  selector: 'app-mypictures',
  templateUrl: './mypictures.component.html',
  styleUrls: ['./mypictures.component.css']
})
export class MypicturesComponent implements OnInit {
  constructor(private tokenService: TokenService, private carrosService: CarrosService) {}
  myCars$!: Observable<ICarPicture[]>;

  ngOnInit(): void {
    const userID = this.tokenService.getDecodedToken().id;
    this.myCars$ = this.carrosService.getCarsByID(userID)
  }
}
