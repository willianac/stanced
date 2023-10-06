import { Component, Input } from "@angular/core";

@Component({
	templateUrl: "comment.component.html",
	selector: "app-comment"
})
export class CommentComponent {
	@Input() author = ""
	@Input() text = ""
	@Input() date = ""
}