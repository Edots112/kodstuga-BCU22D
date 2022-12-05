export default class List {
    constructor() {
        this.messages = [];
    }

    addMessage(message) {
        this.messages.push(message)
    }

    showMessages() {
        return this.messages;
    }
}