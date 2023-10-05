export interface IComment {
	comment: string
	createdAt: string
	user: {
		name: string
		profile_img_url: string | null
	}
}