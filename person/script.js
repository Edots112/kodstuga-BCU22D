// localStorage.setItem("tal1", 100);
// localStorage.setItem("tal2", 200);

// console.log("summa:", localStorage.getItem("tal1") + localStorage.getItem("tal2"));

let savePersonBtn = document.getElementById("savePersonBtn");
let savePersonfName = document.getElementById("firstName");
let savePersonlName = document.getElementById("lastName");
let savePersonAge = document.getElementById("age");
let savePersonPass = document.getElementById("password");
let personsList = document.getElementById("personsList");

if (!localStorage.getItem("persons")) {
    fetch("persons.json")
    .then(res => res.json())
    .then(data => {
        // console.log("fetch json", data);

        // let stringData = JSON.stringify(data);
        // console.log("stringified", stringData);

        // let parsedData = JSON.parse(stringData);
        // console.log("parsed data", parsedData);

        localStorage.setItem("persons", JSON.stringify(data))
    })
}

savePersonBtn.addEventListener("click", () => {

    let newPerson = {
        "firstName": savePersonfName.value,
        "lastName": savePersonlName.value,
        "age": savePersonAge.value,
        "password": savePersonPass
    }
    console.log("new person", newPerson);

    // HÄMTA
    let personsList = JSON.parse(localStorage.getItem("persons"));

    // ÄNDRA
    personsList.push(newPerson)
    console.log("new plist", personsList);

    // SPARA
    localStorage.setItem("persons", JSON.stringify(personsList));

    printPersons();
})

function printPersons() {

    personsList.innerHTML = "";

    // HÄMTA
    let persons = JSON.parse(localStorage.getItem("persons"));
    console.log("persons", persons);

    for (i = 0; i < persons.length; i++) {
       // console.log("person in for", persons[i]);
        personsList.insertAdjacentHTML("afterbegin", "<div id="+ persons[i].firstName +">" + persons[i].firstName + "</div>");
    }
    
}

personsList.addEventListener("click", (event) => {
    console.log("click", event.target.id);

    // HÄMTA
    let persons = JSON.parse(localStorage.getItem("persons"));

    // ÄNDRA
    persons = persons.filter(person => person.firstName !== event.target.id);
    console.log("persons after filter", persons);

    // SPARA
    localStorage.setItem("persons", JSON.stringify(persons));

    printPersons();
})

printPersons();