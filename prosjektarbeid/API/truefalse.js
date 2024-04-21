let Btn = document.querySelector('#button')
let statementEl = document.querySelector ('#statement')
let trueEl = document.querySelector ('#true')
let falseEl = document.querySelector ('#false')
let scoreEl = document.querySelector ('#score')
let startEl = document.querySelector('#start')
let popupWindow2 = document.querySelector('#popup-window2')


startEl.addEventListener('click', function(){
    popupWindow2.style.display = "none";
})

let score = 0
let counter = 0
let counter2 = 0
let i = 0
let data; // global varible
let url;
let config;

url = "https://opentdb.com/api.php?amount=15&category=27&difficulty=easy&type=boolean"
config = {
    headers: {
    'Accept' : 'application/json'
    } 
}

Btn.addEventListener ('click', quizgenerator)
hent()

async function hent(){
    let response = await fetch(url, config) // Local variable, only exists inside the hent() function
    data = await response.json()            // Gives value to the global variable data
    console.log("printer data i funksjon hent")
    console.log(data) 
    i+=1  // Increases i now that data has been loaded (the variable data has been given a value)
    console.log(i)
    console.log("har printet data i funksjon hent")
}

function quizgenerator(){ 
    console.log("starten av quizgenerator")  
    console.log(i)
    if (i>0 && i<16){       // when i > 0 we know data is loaded see hent()
        //console.log(data)
        let index = i-1 // Local count variable. Want to take out question 0 when i=1, i.e. question i-1
        statementEl.innerHTML = `${data.results[index]["question"]}`
        CA = data.results[index]["correct_answer"]
        console.log(CA) 
        i+=1
        counter2 = 0

        trueEl.style.backgroundColor = "rgb(5, 69, 112)"
        falseEl.style.backgroundColor = "rgb(5, 69, 112)"

    }  
    else if(i>15){
        popUp()
    }
} 


trueEl.addEventListener ("click", function(){
    if (counter2 == 0){
        if (CA == "True"){
            trueEl.style.backgroundColor = "green"
            score +=1
            counter+=1
        }
        else if(CA == "False"){
            trueEl.style.backgroundColor = "red"
            counter+=1
        }
}
    
    counter2 = 1
    scoreEl.innerHTML = `score: ${score}/${counter}`
})

falseEl.addEventListener ("click", function(){
    if (counter2 == 0){
        if (CA == "False"){
            falseEl.style.backgroundColor = "green"
            score +=1
            counter+=1
        }
        else if(CA == "True"){
            falseEl.style.backgroundColor = "red"
            counter+=1
        }
    }
    
    counter2 = 1
    scoreEl.innerHTML = `score: ${score}/${counter}`
})

var popupWindow = document.getElementById("popup-window");
var PAbtn = document.getElementById("playAgain-button");
var s = document.getElementById ("s")



function popUp(e){
    s.innerHTML = `Score: ${score}/${counter}`
    popupWindow.style.display = "block";
  }
  PAbtn.addEventListener("click", function(){
    window.location.reload()
  });  










