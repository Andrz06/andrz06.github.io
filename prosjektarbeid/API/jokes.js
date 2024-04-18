let Btn = document.querySelector('button')
let statementEl = document.querySelector ('#statement')
let rightEl = document.querySelector ('#right')
let wrongEl = document.querySelector ('#wrong')


Btn.addEventListener ('click', jokegenerator)


async function jokegenerator (){

i=1
console.log("hei")

let url = "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=boolean"

let config = {
    headers: {
        'Accept' : 'application/json'
}
}

let response = await fetch(url, config)

let data = await response.json()

console.log(data)

statementEl.innerHTML = data.results[i]["question"]
rightEl.innerHTML = data.results[i]["correct_answer"]
wrongEl.innerHTML = data.results[i].incorrect_answers[0]
i+=1



}
