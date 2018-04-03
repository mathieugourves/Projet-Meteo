export class Comment {

    id: string;
    content: string;
    date: Date;
    music: string;
    user: string;

    constructor(item: any) {
        this.id = item._id;
        this.content = item.content;
        this.date = item.date;
        this.music = item.music;
        this.user = item.user.login;
    }
}
