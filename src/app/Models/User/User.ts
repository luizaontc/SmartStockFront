export class User{
    id:number;
    username:string;
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
    name:string;

    constructor(id : number, 
                username:string,
                password:string,
                document:string,
                email:string,
                name:string){
        this.id = id;
        this.username = username;
        this.password = password;
        this.document = document;
        this.email = email;
        this.name = name;
    };
}
