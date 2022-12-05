export default class User {


    constructor(name) {
        this.id = self.crypto.randomUUID();
        this.name = name;
    }

    sayHello() {
        return "My name is " + this.name;
    }

    setName(newName) {
        this.name = newName;
    }
}