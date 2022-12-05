class Message {
    constructor(to, from, message) {
        this.to = to;
        this.from = from;
        this.message = message;
    }

    printMessage() {
        return this.from + " sent a message  to " + this.to +": " + this.message;
    }
}

export default Message;