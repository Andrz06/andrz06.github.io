let spillEl = document.querySelector ('#spill')

let divEl = document.createElement('p')

for(i=0; i<6; i++){
    spillEl.appendChild(divEl)
    divEl.innerHTML = "hei på deg"
}


