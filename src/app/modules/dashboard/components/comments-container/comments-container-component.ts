import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { IComment } from "src/app/shared/models/Comment";

@Component({
	templateUrl: "comments-container.component.html",
	selector: "app-comments-container"
})

export class CommentsContainerComponent {
	@Input() commentList$!: Observable<IComment[]>
}