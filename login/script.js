// Hashing + salt
// let message = "testar";
// console.log("message", message);
// let msgInt8 = new TextEncoder().encode(message);
// console.log("msgInt8", msgInt8);

// let hashBuffer = await crypto.subtle.digest("SHA-256", msgInt8);
// console.log("hashBuffer", hashBuffer);

// let hashArray = Array.from(new Uint8Array(hashBuffer));
// console.log("hashArray", hashArray);

// let hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
// console.log("hashHex", hashHex);

// async function consumeKrypto(message) {
//   let msgInt8 = new TextEncoder().encode(message);
//     let hashBuffer = await crypto.subtle.digest("SHA-256", msgInt8);
//     let hashArray = Array.from(new Uint8Array(hashBuffer));
//     let hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
//     //console.log("hashHex", hashHex);
//     return hashHex;  
// }

// let userPassword = await consumeKrypto("test");
// console.log("test", userPassword);

import UserList from "./userList.js";
import User from "./user.js";

let createName = document.getElementById("createName")
let createPassword = document.getElementById("createPassword")
let createBtn = document.getElementById("createBtn")

let loginName = document.getElementById("loginName")
let loginPassword = document.getElementById("loginPassword")
let loginBtn = document.getElementById("loginBtn")

createBtn.addEventListener("click", () => {
    users.addUser(new User(createName.value, createPassword.value));
    console.log("users", users);
})

loginBtn.addEventListener("click", () => {
    let foundUser = users.users.find(user => user.name === loginName.value);
    // KOLLA OM FOUNDUSER ÄR TRUE
    console.log("foundUser", foundUser);
    console.log("Testa lösenordet: ", foundUser.checkPassword(loginPassword.value));

})

let users = new UserList();
console.log("userList", users);



