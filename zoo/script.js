let zoo = document.getElementById("zoo");

let animals = ["Katt", "Hund", "Gris", "Tupp"];

// for (animal in animals) {

//     let listItem = document.createElement("li")
//     listItem.innerHTML = animals[animal];
//     listItem.id = animals[animal];
//     listItem.style.color = "red";
//     zoo.appendChild(listItem)

// }

animals.map(animal => {
    let listItem = document.createElement("div")
    listItem.innerHTML = animal;
    listItem.id = animal;
    listItem.style.color = "red";

    listItem.className = "box";

    listItem.addEventListener("click", () => {
        listItem.classList.toggle("darkBg")
    })

    // classList.remove("foo");
    // classList.replace("foo", "bar");

    console.log(listItem.classList.contains("foo"));

    zoo.appendChild(listItem)
})