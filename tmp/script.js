let toUpper = "hej på dig janne";

toUpper = toUpper.toUpperCase(toUpper);

console.log("to upp", toUpper);

let zoo = document.getElementById("zoo");
let info = document.getElementById("info");

let animals = ["Katt", "Hund", "Gris", "Tupp"];

animals.map(animal => {
    let listItem = document.createElement("li")
    listItem.innerHTML = animal + " - <span class='delete'>x</span>";
    listItem.id = animal;
    listItem.style.color = "red";
    zoo.appendChild(listItem)
})

zoo.addEventListener("click", (e) => {
    console.log("click", e.target);

    if (e.target.className === "delete") {
        console.log("delete", e.target.parentNode.id);
    } else {
        console.log("Dont delete");
    }
})

lista = ["a", "b", "c", "d"]

lista = lista.filter(item => item !== "b")

console.log("lista", lista);