import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ChangeUserinfoModalComponent } from "./change-userinfo-modal.component";

describe("ChangeUserinfoModalComponent", () => {
	let component: ChangeUserinfoModalComponent;
	let fixture: ComponentFixture<ChangeUserinfoModalComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ ChangeUserinfoModalComponent ]
		})
			.compileComponents();

		fixture = TestBed.createComponent(ChangeUserinfoModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
