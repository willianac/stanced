import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { DashboardComponent } from "./dashboard.component"
import { DashboardModule } from "./dashboard.module"
import { CarrosService } from "src/app/core/services/carros.service"
import { HttpClientModule } from "@angular/common/http"
import { ICarPicture } from "../../shared/models/carro"
import { Observable, of } from "rxjs"

function returnCarPhotos(): Observable<ICarPicture[]> {
	const photos: ICarPicture[] = []

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

		spyOn(service, "clearCache")
			.and.callFake(returnCarPhotos)
		fixture.detectChanges()

		expect(photoGrid).not.toBeNull()
	})
})