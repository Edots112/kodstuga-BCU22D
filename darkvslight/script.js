let chooseMode = document.getElementById("chooseMode");

if (localStorage.getItem("mode")) {
    console.log("Har valt tema");
    setMode();
} else {
    console.log("Har inte valt tema");
    localStorage.setItem("mode", "dark");
    setMode();
}

function setMode() {
    document.body.classList = localStorage.getItem("mode");
    showToggleBtn();
}

function showToggleBtn() {

    chooseMode.innerHTML = "";

    let toggleBtn = document.createElement("button");
    toggleBtn.innerText = "Change to ";

    if (localStorage.getItem("mode") === "dark") {
        toggleBtn.innerText += "light";
        toggleBtn.addEventListener("click", () => { 
        localStorage.setItem("mode", "light");
        setMode();
        });
    } else {
        toggleBtn.innerText += "dark";
        toggleBtn.addEventListener("click", () => { 
        localStorage.setItem("mode", "dark");
        setMode();
        });
    };

    chooseMode.appendChild(toggleBtn);
}
