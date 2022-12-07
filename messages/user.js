export default class User {

    constructor(name, email) {
        this.id = self.crypto.randomUUID();
        this.name = name;
        this._email = email;
    }

    sayHello() {
        return "My name is " + this._email;
    }

    setName(newName) {
        this.name = newName;
    }
}