let time = document.getElementById("time");


let timer = setInterval(showDate, 1000)
let counter = 0;

function showDate() {

    counter++

    if (counter > 10) {
        clearInterval(timer)
    }

    let datum = new Date();
    let datumSe = datum.toLocaleTimeString()
    time.innerHTML = "<strong>" + datumSe +"</strong>";
}


