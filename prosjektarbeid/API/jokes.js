let Btn = document.querySelector('#button')
let statementEl = document.querySelector ('#statement')
let rightEl = document.querySelector ('#true')
let wrongEl = document.querySelector ('#false')


Btn.addEventListener ('click', quizgenerator)


async function quizgenerator (){

i=1
console.log("hei")

let url = "https://opentdb.com/api.php?amount=15&category=27&difficulty=easy&type=boolean"

 let config = {
    headers: {
        'Accept' : 'application/json'
} 
}

let response = await fetch(url, config)

let data = await response.json()

console.log(data)

statementEl.innerHTML = `Statement: ${data.results[i]["question"]}`

/* statementEl.innerHTML = data.results[i]["question"]
rightEl.innerHTML = data.results[i]["correct_answer"]
wrongEl.innerHTML = data.results[i].incorrect_answers[0] */
i+=1

}

score = 0






