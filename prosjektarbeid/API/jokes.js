let jokeBtn = document.querySelector('button')
let jokeEl = document.querySelector ('#joke')

jokeBtn.addEventListener ('click', jokegenerator)


async function jokegenerator (){

let url = "https://api.api-ninjas.com/v1/jokes?limit="

let config = {
    headers: {
        'Accept' : 'application/json'
}
}

let response = await fetch (url, config)

let data = await response.json()

console.log(data)

jokeEl.innerHTML = data["joke"]
}
