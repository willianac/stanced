import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "app-edit-modal",
	templateUrl: "./edit-modal.component.html"
})
export class EditModalComponent {
	@Input() title = ""
	@Input() description = ""
	@Input() inputPlaceholder? = ""

	@Output() closeModalEvent = new EventEmitter()
	@Output() saveEvent = new EventEmitter<string>()

	newText = ""

	public save() {
		if(!this.newText) return
		this.saveEvent.emit(this.newText)
	}

	public close() {
		this.closeModalEvent.emit()
	}
}
