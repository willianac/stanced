import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { DashboardComponent } from "./dashboard.component"
import { DashboardModule } from "./dashboard.module"
import { CarrosService } from "src/app/core/services/carros.service"
import { HttpClientModule } from "@angular/common/http"
import { ICarPicture } from "../../shared/models/carro"
import { Observable, of } from "rxjs"

function returnCarPhotos(): Observable<ICarPicture[]> {
  let photos: ICarPicture[] = []

  for(let i = 0; i < 6; i++) {
    photos.push({
      url : "https://jdmpics.s3.sa-east-1.amazonaws.com/1681246633818.jpg",
      id : 2,
      name : "nissan",
      description : "carro brabo de testes"
    })
  }

  return of(photos)
}

describe("Dashboard Component", () => {
  let fixture: ComponentFixture<DashboardComponent>;
  let service: CarrosService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [
        DashboardModule,
        HttpClientModule,
        RouterTestingModule
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(DashboardComponent)
    service = TestBed.inject(CarrosService)
  })

  it("Component should be created", () => {
    const component = fixture.componentInstance

    expect(component).toBeTruthy()
  })

  it("Should display images when receive data", () => {
    const carImages = returnCarPhotos()
    const photoGrid = fixture.nativeElement.querySelector("app-photo-grid")

    spyOn(service, "retornaCarros")
      .and.callFake(returnCarPhotos)
    fixture.detectChanges()

    expect(photoGrid).not.toBeNull()
  })
})