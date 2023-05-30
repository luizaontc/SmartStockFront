export class User{
    username?:string;
    password?:string;
    document?:string;
    userImage?:string;
    email?:string;
    deleted?:boolean;
    deletedDate?: Date;
    userDeletedId?:number;
    creationDate?: Date;
    userCreationId?:number;
    modifiedDate?: Date;
    userModifiedId?:number;
    name?:string;

    constructor(){};
}
