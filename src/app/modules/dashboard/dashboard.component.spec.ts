import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { DashboardComponent } from "./dashboard.component"
import { DashboardModule } from "./dashboard.module"
import { PicturesService } from "src/app/core/services/pictures.service"
import { HttpClientModule } from "@angular/common/http"
import { IPicture } from "../../shared/models/Picture"
import { Observable, of } from "rxjs"

function returnCarPhotos(): Observable<IPicture[]> {
	const photos: IPicture[] = []

	return of(photos)
}

describe("Dashboard Component", () => {
	let fixture: ComponentFixture<DashboardComponent>;
	let service: PicturesService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports : [
				DashboardModule,
				HttpClientModule,
				RouterTestingModule
			]
		}).compileComponents()

		fixture = TestBed.createComponent(DashboardComponent)
		service = TestBed.inject(PicturesService)
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