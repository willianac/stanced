export interface ICarPicture {
    id: number
    url: string
    title: string
    description: string
    owner_name: string
    owner_id: number
    allowComments: boolean
    showTooltip: boolean
    showOverlay: boolean
    likes: number
    didUserLiked: boolean
    shouldHeartBeFilled: boolean
    createdAt: Date
    updatedAt: Date
}