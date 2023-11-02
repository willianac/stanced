import { ComponentFixture, TestBed } from "@angular/core/testing"
import { CardPhotoComponent } from "./card-photo.component"

describe("Card photo component", () => {
	let fixture: ComponentFixture<CardPhotoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations : [CardPhotoComponent]
		}).compileComponents()

		fixture = TestBed.createComponent(CardPhotoComponent)
	})

	it("Should create component", () => {
		const instance = fixture.componentInstance;
		fixture.detectChanges()
	})
})