let currMoleTile;
let currMonsterTile;
let score = 0;
let gameOver = false;
let lastClickTime = Date.now();
let timerInterval;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid in html
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000); 
    setInterval(setMonster, 1000);
    timerInterval = setInterval(checkTime, 1000); // Add a timer for 1 second
}

function getRandomTile() {
    //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "bilder_mole/beaver.png";

    let num = getRandomTile();
    if (currMonsterTile && currMonsterTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setMonster() {
    if (gameOver) {
        return;
    }
    if (currMonsterTile) {
        currMonsterTile.innerHTML = "";
    }
    let monster = document.createElement("img");
    monster.src = "bilder_mole/monster.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currMonsterTile = document.getElementById(num);
    currMonsterTile.appendChild(monster);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currMoleTile) {
        score += 1;
        document.getElementById("score").innerText = score.toString(); //update score html
        lastClickTime = Date.now(); // Update last click time
    }
    else if (this == currMonsterTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
        clearInterval(timerInterval); // Stop the timer if the game is over
    }
}

function checkTime() {
    let currentTime = Date.now();
    if (currentTime - lastClickTime >= 3000) { // Check if 3 seconds have passed since last click
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
        clearInterval(timerInterval); // Stop the timer
    }
}