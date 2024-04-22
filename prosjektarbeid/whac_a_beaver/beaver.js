let currBeaverTile;
let currMonsterTile;
let score = 0;
let gameOver = false;
let lastClickTime;
let timerInterval;
let BtnEasy = document.querySelector ('.easy')
let BtnMedium = document.querySelector ('.medium')
let BtnHard = document.querySelector ('.hard')
let boardEl = document.querySelector('#board')


var popupWindow2 = document.getElementById("popup-window2");


window.onload = function() {
   
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
    BeaverInterval = setInterval(setBeaver, r); 
    MonsterInterval = setInterval(setMonster, r);
    timerInterval = setInterval(checkTime, 1000); // Add a timer for 1 second
}


function getRandomTile() {
    //getting random number 0-8
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setBeaver() {
    if (gameOver) {
        return;
    }
<<<<<<< Updated upstream:prosjektarbeid/whac_a_mole/mole.js
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    } 
    let mole = document.createElement("img");
    mole.src = "bilder_mole/beaver.png";
=======
    if (currBeaverTile) {
        currBeaverTile.innerHTML = "";
    }
    let beaver = document.createElement("img");
    beaver.src = "bilder_beaver/beaver.png";
>>>>>>> Stashed changes:prosjektarbeid/whac_a_beaver/beaver.js

    let num = getRandomTile();
    if (currMonsterTile && currMonsterTile.id == num) {
        return;
    }
    currBeaverTile = document.getElementById(num);
    currBeaverTile.appendChild(beaver);
}

function setMonster() {
    if (gameOver) {
        return;
    }
    if (currMonsterTile) {
        currMonsterTile.innerHTML = "";
    }
    let monster = document.createElement("img");
    monster.src = "bilder_beaver/monster.png";

    let num = getRandomTile();
    if (currBeaverTile && currBeaverTile.id == num) {
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
    if (this == currBeaverTile) {
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
   
    if (currentTime - lastClickTime >= 4000) { // Check if 4 seconds have passed since last click
        gameOver = true;
        clearInterval(timerInterval); // Stop the timer
        popUp()
    }
}

BtnEasy.addEventListener("click", function(){
    popupWindow2.style.display = "none";
    
    setGame(1000)
    lastClickTime = Date.now()

    
    
    
})

BtnMedium.addEventListener("click", function() {
    popupWindow2.style.display = "none";
    
    setGame(800)
    lastClickTime = Date.now()
    
})

BtnHard.addEventListener("click", function(){
    popupWindow2.style.display = "none";
    
    setGame(600)
    lastClickTime = Date.now()
    

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
  