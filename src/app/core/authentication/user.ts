export interface IUser {
    username: string,
    password: string | number,
}

export interface IFullUser {
    name? : string
    password : string
    email : string
}

export interface JWTtoken {
    name: string
    id: number
    email: string
    iat: number
    exp: number
}