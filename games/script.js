let hero = document.getElementById("hero");
let game = document.getElementById("game");

let bottom = 0;
let left = 50;

document.addEventListener("keyup", (e) => {
    //console.log("e", e.key);

    switch (e.key) {
        case "w":
        case "ArrowUp":
           
            bottom += 20;
            hero.style.bottom = bottom + "px";
        break;

        case "s":
        case "ArrowDown":
            
            bottom -= 20;
            hero.style.bottom = bottom + "px";
        break;

        // TODO: BUGG i hitbox när vi rört oss i sidled

        // case "d":
        // case "ArrowRight":
        //     left += 20;
        //     hero.style.left = left + "px";
        // break;

        // case "a":
        // case "ArrowLeft":
        //     left -= 20;
        //     hero.style.left = left + "px";
        // break;

    }
})

let enemyId = 0;

function createEnemy() {
    enemyId++
    let enemy = document.createElement("div");
    enemy.classList = "enemy";
    let enemyLeft = 600;
    let enemyBottom = Math.round(Math.round(Math.random() * 500)/10)*10;
    //console.log(enemyBottom);
    // Math.round(Math.floor(Math.random() * (500 - 1)/10)*10)


    enemy.style.left = enemyLeft + "px";
    enemy.style.bottom = enemyBottom + "px";
    enemy.id = enemyId;

    let move = setInterval(() => {
        enemyLeft -= 50;
        enemy.style.left = enemyLeft + "px";

        if (enemyBottom > bottom && enemyBottom < bottom + 150 && enemyLeft === left) {
            console.log("HIT");

            let dead = setInterval(() => {
                hero.style.backgroundColor = "red";

                let resurect = setInterval(() => {
                    hero.style.backgroundColor = "purple"
                    clearInterval(dead)
                }, 100)

            }, 100)
            
        
        }

        if (enemyLeft <= 0) {
            clearInterval(move);
            enemy.remove();
            createEnemy();
        }

    }, 50)

    game.appendChild(enemy);
}

let enemy2Id = 0;

function createEnemy2() {
    enemy2Id++
    let enemy2 = document.createElement("div");
    enemy2.classList = "enemy";
    let enemy2Left = 600;
    let enemy2Bottom = Math.round(Math.round(Math.random() * 500)/10)*10;
    //console.log(enemyBottom);
    // Math.round(Math.floor(Math.random() * (500 - 1)/10)*10)


    enemy2.style.left = enemy2Left + "px";
    enemy2.style.bottom = enemy2Bottom + "px";
    enemy2.id = enemyId;
    enemy2.style.backgroundColor = "green";

    let move = setInterval(() => {
        enemy2Left -= 50;
        enemy2.style.left = enemy2Left + "px";

        if (enemy2Bottom > bottom && enemy2Bottom < bottom + 150 && enemy2Left === left) {
            console.log("HIT2");

            let dead = setInterval(() => {
                hero.style.backgroundColor = "black";

                let resurect = setInterval(() => {
                    hero.style.backgroundColor = "purple"
                    clearInterval(dead)
                }, 100)

            }, 100)
            
        
        }

        if (enemy2Left <= 0) {
            clearInterval(move);
            enemy2.remove();
            createEnemy2();
        }

    }, 50)

    game.appendChild(enemy2);
}

createEnemy();
createEnemy2();