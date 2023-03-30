export interface IUser {
    username: string,
    password: string | number,
}

export interface IFullUser {
    name : string
    password? : string
    email : string
}