import { Component, ElementRef, HostListener, Input } from "@angular/core";
import { CommentsService } from "src/app/core/services/comments.service";

@Component({
	templateUrl: "comment.component.html",
	selector: "app-comment"
})
export class CommentComponent {
	@Input() id = ""
	@Input() author = ""
	@Input() text = ""
	@Input() date = ""
	showEllipsis = false;
	showMenu = false;

	constructor(private elementRef: ElementRef, private commentsService: CommentsService) {}

	public handleMenu() {
		this.showMenu = !this.showMenu
	}

	@HostListener("document:click", ["$event"])
	handleCommentClick(event: MouseEvent) {
		if (!this.elementRef.nativeElement.contains(event.target)) {
			this.showMenu = false;
		}
	}

	public deleteComment() {
		this.commentsService.remove(this.id).subscribe()
	}
}