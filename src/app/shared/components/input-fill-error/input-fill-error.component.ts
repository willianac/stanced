import { Component, Input } from "@angular/core";

@Component({
	selector: "app-input-fill-error",
	templateUrl: "./input-fill-error.component.html",
	styleUrls: ["./input-fill-error.component.css"]
})
export class InputFillErrorComponent {
  @Input() message!: string
}
