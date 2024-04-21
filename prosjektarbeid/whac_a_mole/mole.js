let currMoleTile;
let currMonsterTile;
let score = 0;
let gameOver = false;
let lastClickTime = Date.now();
let timerInterval;
let BtnEasy = document.querySelector ('.easy')
let BtnMedium = document.querySelector ('.medium')
let BtnHard = document.querySelector ('.hard')
let boardEl = document.querySelector('#board')

var popupWindow2 = document.getElementById("popup-window2");


window.onload = function() {
    //setGame(1000);
    popupWindow2.style.display = "block";

}


function setGame(r) {
    clearInterval(timerInterval)
    //set up the grid in html
    for (let i = 0; i < 9; i++) { //giving ID 0-8
        
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        boardEl.appendChild(tile);
    }
    MoleInterval = setInterval(setMole, r); 
    MonsterInterval = setInterval(setMonster, r);
    timerInterval = setInterval(checkTime, 1000); // Add a timer for 1 second
}


function getRandomTile() {
    //getting random number 0-8
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
        popUp()
        return;

    }
    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score html
        lastClickTime = Date.now();  // Update last click time
    }
    else if (this == currMonsterTile) {
        gameOver = true;
        clearInterval(timerInterval); // Stop the timer if the game is over
        popUp()
    }
}

function checkTime() {
    let currentTime = Date.now();
    if (currentTime - lastClickTime >= 6000) { // Check if 6 seconds have passed since last click
        gameOver = true;
        clearInterval(timerInterval); // Stop the timer
        popUp()
    }
}

BtnEasy.addEventListener("click", function(){
    popupWindow2.style.display = "none";
    
    setGame(1000)
    
    
    
})

BtnMedium.addEventListener("click", function() {
    popupWindow2.style.display = "none";
    setGame(800)
    
})

BtnHard.addEventListener("click", function(){
    popupWindow2.style.display = "none";
    setGame(600)
    

})



var popupWindow = document.getElementById("popup-window");
var PAbtn = document.getElementById("playAgain-button");
var s = document.getElementById ("s")



function popUp(e){
    s.innerHTML = `Score: ${score}`
    popupWindow.style.display = "block";
  }
  PAbtn.addEventListener("click", function(){
    window.location.reload()
  });  
  