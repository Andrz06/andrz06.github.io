let Btn = document.querySelector('#button')
let statementEl = document.querySelector ('#statement')
let trueEl = document.querySelector ('#true')
let falseEl = document.querySelector ('#false')
let scoreEl = document.querySelector ('#score')

let score = 0
let counter = 0
let counter2 = 0
let i = 0
let data; // Global variabel, samme verdi i og utenfor
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
    let response = await fetch(url, config) // Lokal variabel, eksisterer kun inne i funksjonen hent()
    data = await response.json()            // Gir verdi til den globale variabelen data
    console.log("printer data i funksjon hent")
    console.log(data) 
    i+=1  // Øker i nå som data er lastet (variabelen data har fått verdi)
    console.log(i)
    console.log("har printet data i funksjon hent")
}

function quizgenerator(){ 
    console.log("starten av quizgenerator")  
    console.log(i)
    if (i>0 && i<16){       // når i> 0 vet vi at data er lastet, se hent()
        //console.log(data)
        let index = i-1 // Lokal tellevariabel. Ønsker å ta ut spm 0 når i=1, altså spørsmål i-1
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










