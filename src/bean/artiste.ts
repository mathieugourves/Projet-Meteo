export class Artiste {
     id: string
     firstname: string
     lastname: string
     nickname:string
    constructor(item : any) {
     this.id = item._id;
     this.firstname = item.firstName;
     this.lastname = item.lastName;
     this.nickname = item.nickName;
    }
  }
