import { Component, Input } from "@angular/core";
import { Observable, concatMap, of, tap } from "rxjs";
import { CommentsService } from "src/app/core/services/comments.service";
import { IComment } from "src/app/shared/models/Comment";

@Component({
	templateUrl: "comments-container.component.html",
	selector: "app-comments-container"
})

export class CommentsContainerComponent {
	@Input() commentList$!: Observable<IComment[]>
	@Input() pictureId = ""
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
		this.commentsService.edit(this.editingCommentId, newComment).pipe(
			concatMap(() => this.commentsService.getComments(this.pictureId)),
			tap((comments) => {
				this.commentList$ = of(comments)
			})
		).subscribe({
			next: () => this.closeModal()
		})
	}

	public deleteComment(id: string) {
		this.commentsService.remove(id).pipe(
			concatMap(() => this.commentsService.getComments(this.pictureId)),
			tap((comments) => {
				this.commentList$ = of(comments)
			})
		).subscribe()
	}
}