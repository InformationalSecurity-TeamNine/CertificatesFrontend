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
    declineReason:string,
    issuerUsername:string
}

export interface CertificateWithdrawReturn{
    certificateId: number,
    reason: string
}

export interface WithdrawnCertificate{
    serialNumber: string,
    reason: string,
    withdrawDate: Date,
    userEmail: string,
    wasChild: boolean
}

export interface DeclineRequestDTO{
    requestId: number,
    reason: string
}