import { ChangeDetectorRef, Component, ElementRef, HostListener, Input, ViewChild } from "@angular/core";
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
	showMenu = false;

	@ViewChild("toggleButton") toggleButton!: ElementRef
	@ViewChild("menu") menu!: ElementRef

	constructor(
		private elementRef: ElementRef, 
		private commentsService: CommentsService, 
		private changeDetector: ChangeDetectorRef
	) {}

	public handleMenu() {
		this.showMenu = !this.showMenu
		this.changeDetector.detectChanges()
	}

	@HostListener("document:click", ["$event"])
	handleCommentClick(event: MouseEvent) {
		if (!this.elementRef.nativeElement.contains(event.target)) {
			this.showMenu = false
		}
	}

	public deleteComment() {
		this.commentsService.remove(this.id).subscribe()
	}
}