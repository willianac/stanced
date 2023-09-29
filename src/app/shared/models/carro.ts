export interface ICarPicture {
    id: number
    url: string
    title: string
    description: string
    user_name: string
    userid: number
    allowComments: boolean
    showTooltip: boolean
    showOverlay: boolean
    likes: number
    createdAt: Date
    updatedAt: Date
}