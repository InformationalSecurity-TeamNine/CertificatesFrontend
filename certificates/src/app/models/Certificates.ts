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

