export default class UserList {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    tellUsAboutUsers() {
        let onlineUsers = this.users.filter(user => user.online === true);
        return "Vi har så många som " + this.users.length + " Användare på sidan! Av dom är " + onlineUsers.length + " online just nu!";
    }
}

