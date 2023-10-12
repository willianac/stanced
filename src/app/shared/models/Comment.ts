export interface IComment {
	id: string
	comment: string
	createdAt: string
	user: {
		id: string
		name: string
		profile_img_url: string | null
	}
}