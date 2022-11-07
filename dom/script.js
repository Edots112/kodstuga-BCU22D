let animals = ["Katt", "Hund", "Vandrande pinne", "Mus"];

let zoo = document.getElementById("zoo");
let newAnimalName = document.getElementById("newAnimalName");
let saveAnimalBtn = document.getElementById("saveAnimalBtn");

console.log("zoo", zoo)

function printAnimals() {

    zoo.innerHTML = "";

   for (animal in animals) {
    console.log("animal", animals[animal]);

    zoo.insertAdjacentHTML("afterbegin", "<li>" + animals[animal] + "</li>")
    } 
}


saveAnimalBtn.addEventListener("click", () => {
    console.log("click på knapp!");
    console.log("input", newAnimalName.value);

    animals.push(newAnimalName.value)
    console.log("array after update", animals);
    printAnimals();
})

printAnimals();