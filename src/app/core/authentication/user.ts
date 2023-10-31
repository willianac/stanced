export interface IFullUser {
    name? : string
    password : string
    email : string
}

export interface JWTtoken {
    name: string
    id: string
    email: string
		avatar: string
    iat: number
    exp: number
}