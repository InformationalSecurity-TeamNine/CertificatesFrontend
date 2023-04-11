export interface Certificate{
    id?:number,
    issuedAt: Date,
    user: UserForCertificateDTO,
    type: string,
    serialNumber: string,
    validTo: Date,
    status: string
}

export interface UserForCertificateDTO{
    name: string,
    surname: string,
    email: string
}
export interface PastRequests{
    id?:number,
    username: string,
    status: string,
    type: string,
    declineReason:string
}
