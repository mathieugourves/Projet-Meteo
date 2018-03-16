export class Artiste {

    id: string
    firstname: string
    lastname: string
    stagename: string

    constructor(item: any) {
        console.log(item);
        this.id = item._id;
        this.firstname = item.firstName;
        this.lastname = item.lastName;
        this.stagename = item.nickName;
    }
}
