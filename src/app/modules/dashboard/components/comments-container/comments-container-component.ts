import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { IComment } from "src/app/shared/models/Comment";

@Component({
	templateUrl: "comments-container.component.html",
	selector: "app-comments-container"
})

export class CommentsContainerComponent {
	@Input() commentList$!: Observable<IComment[]>
	isEditCommentModalOpen = false
	editingCommentId? = ""
	
	public openModal(id: string) {
		this.isEditCommentModalOpen = true
		this.editingCommentId = id
	}

	public closeModal() {
		this.isEditCommentModalOpen = false
		this.editingCommentId = undefined
	}

	public editComment(newComment: string) {
		console.log(this.editingCommentId)
		console.log(newComment)
	}
}