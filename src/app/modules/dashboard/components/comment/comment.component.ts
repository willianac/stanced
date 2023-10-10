import { Component, ElementRef, HostListener, Input } from "@angular/core";

@Component({
	templateUrl: "comment.component.html",
	selector: "app-comment"
})
export class CommentComponent {
	@Input() author = ""
	@Input() text = ""
	@Input() date = ""
	showEllipsis = false;
	showMenu = false;

	constructor(private elementRef: ElementRef) {}

	public handleMenu() {
		this.showMenu = !this.showMenu
	}

	@HostListener("document:click", ["$event"])
	handleCommentClick(event: MouseEvent) {
		if (!this.elementRef.nativeElement.contains(event.target)) {
			this.showMenu = false;
		}
	}
}