let zoo = document.getElementById("zoo");
let info = document.getElementById("info");

info.innerText = "<strong>FEEET</strong>";

let animals = ["Katt", "Hund", "Gris", "Tupp"];

// for (animal in animals) {

//     let listItem = document.createElement("li")
//     listItem.innerHTML = animals[animal];
//     listItem.id = animals[animal];
//     listItem.style.color = "red";
//     zoo.appendChild(listItem)

// }

animals.map(animal => {
    let listItem = document.createElement("li")
    listItem.innerHTML = animal;
    listItem.id = animal;
    listItem.style.color = "red";
    zoo.appendChild(listItem)
})