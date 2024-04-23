
var board;
var playerO = "O";
var playerX = "X";
var currPlayer = playerO;
var gameOver = false;
var w = document.getElementById('w');
var turn = document.getElementById('turn');
var tilecounter = 0;

    board = [
                [' ', ' ', ' '],
                [' ', ' ', ' '],
                [' ', ' ', ' ']
            ]

    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            if (r == 0 || r == 1) {
                tile.classList.add("horizontal-line");
            }
            if (c == 0 || c == 1) {
                tile.classList.add("vertical-line");
            }
            /* tile.innerText = ""; */
            tile.addEventListener("click", setTile);
            document.getElementById("board").appendChild(tile);
        }
    }
    turn.innerHTML = `player ${playerO}'s turn!`

function setTile() {
    if (gameOver) {
        return;
    }

    let coords = this.id.split("-");    //ex) "1-2" -> ["1", "2'"]
    let r = Number(coords[0]);
    let c = Number(coords[1]);

    if (board[r][c] != ' ') { 
        //already taken spot
        return;
    }
    
    board[r][c] = currPlayer; //mark the board
    this.innerText = currPlayer; //mark the board on html

    //change players
    if (currPlayer == playerO) {
        currPlayer = playerX;
    }
    else {
        currPlayer = playerO;
    }
    turn.innerHTML = `player ${currPlayer}'s turn!`

    //check winner
    tilecounter ++
    console.log(tilecounter)
    if (tilecounter == 9){
        drawUp()
    }
    checkWinner();

}



function checkWinner() {
    //horizontally, check 3 rows
    for (let r = 0; r < 3; r++) {
        if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != ' ') {
            //if we found the winning row
            //apply the winner style to that row
           
            gameOver = true;
            end()
            popUp()
            return; 
        }
    }

    //vertically, check 3 columns
    for (let c = 0; c < 3; c++) {
        if (board[0][c] == board[1][c] && board[1][c] ==  board[2][c] && board[0][c] != ' ') {
            //if we found the winning col
            //apply the winner style to that col
            
            gameOver = true;
            end()
            popUp()
            return;
        }
    }

    //diagonally
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' ') {
    
        gameOver = true;
        end()
        popUp()
        return;
    }

    //anti-diagonally
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' ') {
    
        gameOver = true;
        end()
        popUp()
        return;
    }
}

function end(){
    if (currPlayer == playerO) {
        currPlayer = playerX;
    }
    else {
        currPlayer = playerO;
    }
    turn.innerHTML = "‎"
    w.innerHTML = `player ${currPlayer} won`
} 

  // Get the elements by their ID
  var popupLink = document.getElementById("popup-link");
  var popupWindow = document.getElementById("popup-window");
  var PAbtn = document.getElementById("playAgain-button");
  var gameOverTxt = document.getElementById("gameOver")

  function popUp(){
    gameOverTxt.innerHTML = "Congratulations!"
    popupWindow.style.display = "block";
  }
  PAbtn.addEventListener("click", function(){
    window.location.reload()
  });  

  function drawUp(){
    gameOverTxt.innerHTML = "It's a draw!"
    w.innerHTML = "‎"
    popupWindow.style.display = "block";
  }


  