import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from "@angular/core";
import { TokenService } from "src/app/core/authentication/token.service";

@Component({
	templateUrl: "comment.component.html",
	selector: "app-comment"
})
export class CommentComponent {
	@Input() id = ""
	@Input() author = ""
	@Input() authorId = ""
	@Input() text = ""
	@Input() date = ""
	@Output() editCommentEvent = new EventEmitter<string>()
	@Output() deleteCommentEvent = new EventEmitter<string>()
	showMenu = false;
	userid = ""

	constructor(
		private elementRef: ElementRef,
		private token: TokenService
	) {
		this.userid = token.getDecodedToken().id
	}

	public handleMenu() {
		this.showMenu = !this.showMenu
	}

	@HostListener("document:click", ["$event"])
	handleCommentClick(event: MouseEvent) {
		if (!this.elementRef.nativeElement.contains(event.target)) {
			this.showMenu = false
		}
	}

	public emiteDeleteCommentEvent() {
		this.deleteCommentEvent.emit(this.id)
		this.handleMenu()
	}

	public emitEditCommentEvent() {
		this.editCommentEvent.emit(this.id)
		this.handleMenu()
	}
}