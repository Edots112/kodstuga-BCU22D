const findAgentName = document.getElementById("findAgent");
const findAgentBtn = document.getElementById("findAgentBtn");
const printAgentName = document.getElementById("personName");

const chooseColor = document.getElementById("chooseColor");
const chooseColorBtn = document.getElementById("chooseColorBtn");


const showScore = document.getElementById("showScore");
const plussBtn = document.getElementById("plussBtn");
const minusBtn = document.getElementById("minusBtn");

// let persons = [
//     { firstName: 'Anna', lastName: 'Smith', age: 20, password: 'test' },
//     { firstName: 'John', lastName: 'Doe', age: 30, password: 'test' },
//     { firstName: 'Bob', lastName: 'Marley', age: 40, password: 'test' },
//     { firstName: 'Kate', lastName: 'Winslet', age: 50, password: 'test' }
// ]

fetch("persons.json")
.then(res => res.json())
.then(data => {
    console.log(data);

    findAgentBtn.addEventListener("click", () => {
    findAgentInJson(data);
})

// findAgentBtn.addEventListener("click", () => {
//     console.log("klick på knapp");

//     let person = persons.find(person => person.firstName === findAgentName.value);
//     console.log("person", person);

//     if (person) {
//         printAgentName.innerHTML = person.firstName + " " + person.lastName;
//     } else {
//         printAgentName.innerHTML = "Person not found";
//     }

// })

const findAgentInJson = (persons) => {
    console.log("klick på knapp");

    let person = persons.find(person => person.firstName === findAgentName.value);
    console.log("person", person);

    if (person) {
        printAgentName.innerHTML = person.firstName + " " + person.lastName;
        document.body.style.backgroundColor = "green"
    } else {
        printAgentName.innerHTML = "Person not found";
        document.body.style.backgroundColor = "red"
    }
};

chooseColorBtn.addEventListener("click", () => {
    console.log("Our color", chooseColor.value);

    document.body.style.backgroundColor = chooseColor.value;
})

let score;

if (localStorage.getItem("score")) {
    score = localStorage.getItem("score")
} else {
    score = 0;
}

plussBtn.addEventListener("click", () => {
    score++;
    updateScore();
})

minusBtn.addEventListener("click", () => {
    score--;
    updateScore();
})

const updateScore = () => {
    localStorage.setItem("score", score);
    showScore.innerHTML = score;
}

() => {}

function doSomethingCool() {

}

updateScore();