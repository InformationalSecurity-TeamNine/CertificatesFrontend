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
export interface ResetType{
    verifyType:String
}

export interface PasswordReset{
    code:string,
    password:string,
    repeatPassword:string
}