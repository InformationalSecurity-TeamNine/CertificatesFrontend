export interface User{
    id?:number,
    name:string,
    surname:string,
    telephoneNumber:string,
    email:string,
    password:string,
    repeatPassword:string,
    verifyType:string
}

export interface RegisteredUser{
    id?:number,
    name:string,
    surname:string,
    telephoneNumber:string,
    email:string,
}