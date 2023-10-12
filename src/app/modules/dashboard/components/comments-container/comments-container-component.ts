import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { CommentsService } from "src/app/core/services/comments.service";
import { IComment } from "src/app/shared/models/Comment";

@Component({
	templateUrl: "comments-container.component.html",
	selector: "app-comments-container"
})

export class CommentsContainerComponent {
	@Input() commentList$!: Observable<IComment[]>
	isEditCommentModalOpen = false
	editingCommentId = ""

	constructor(private commentsService: CommentsService) {}
	
	public openModal(id: string) {
		this.isEditCommentModalOpen = true
		this.editingCommentId = id
	}

	public closeModal() {
		this.isEditCommentModalOpen = false
		this.editingCommentId = ""
	}

	public editComment(newComment: string) {
		this.commentsService.edit(this.editingCommentId, newComment).subscribe({
			next: () => this.closeModal()
		})
	}
}