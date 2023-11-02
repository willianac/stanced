import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MypicturesComponent } from "./mypictures.component";

describe("MypicturesComponent", () => {
	let component: MypicturesComponent;
	let fixture: ComponentFixture<MypicturesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ MypicturesComponent ]
		})
			.compileComponents();

		fixture = TestBed.createComponent(MypicturesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
