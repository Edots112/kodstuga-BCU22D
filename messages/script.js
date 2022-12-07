import Message from "./message.js";
import List from "./list.js";
import User from "./user.js";

let messageBox = document.getElementById("messageBox");

let kalle = new User("Kalle", "kalle@mail.com")
let pelle = new User("Pelle", "pelle@mail.com")
console.log("kalle", kalle._email);
console.log("kalle", kalle.sayHello());
kalle.setName("Herman");
console.log("kalle", kalle.sayHello());
console.log("palle", pelle);

let message = new Message("Kalle", "Pelle", "Hej på dig");
console.log(message.printMessage());

let messageList = new List();

messageList.addMessage(new Message("Kalle", "Pelle", "Hej på dig"))
messageList.addMessage(new Message("Pelle", "Kalle", "Nämen tjena!"))

console.log("Listan", messageList.showMessages());

messageList.messages.map(message => {
   // console.log("message", message);
    messageBox.insertAdjacentHTML("afterbegin", "<li>" + message.printMessage() + "</li>")
})

