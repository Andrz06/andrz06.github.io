let spillEl = document.querySelector('#spill')

let boks0 = document.querySelector ("#boks0")
let boks1 = document.querySelector ("#boks1")
let boks2 = document.querySelector ("#boks2")
let boks3 = document.querySelector ("#boks3")
let boks4 = document.querySelector ("#boks4")
let boks5 = document.querySelector ("#boks5")



for(i=0; i<6; i++){
    let divEl = document.createElement('div')
    
    divEl.setAttribute("id", `boks${i}`)
    spillEl.appendChild(divEl)
}

for(i=0; i<6; i++){
    let pEl = document.createElement('p')
    let imgEl = document.createElement('img')
    
    spillEl.appendChild(divEl)
}















