let spillEl = document.querySelector('#spill')



let boks1 = {
    navn: "Flappy",
    bilde: "bilder_index/flappy-bird.jpg",
}
let boks2 = {
    navn: "Tre på rad",
    bilde: "bilder_index/fugl.jpeg",
}
let boks3 = {
    navn: "Egg i kurv",
    bilde: "bilder_index/fugl.jpeg",
}
let boks4 = {
    navn: "fortnite",
    bilde: "bilder_index/fugl.jpeg",
}
let boks5 = {
    navn: "fortnite",
    bilde: "bilder_index/fugl.jpeg",
}

let spillArr = [boks1, boks2, boks3, boks4, boks5]

for(i=0;i<spillArr.length;i++){
    let divEl = document.createElement('div');
    spillEl.appendChild(divEl);

    let navnEl = document.createElement('a');
    //let bildeEl = document.createElement('img')
    //bildeEl.src = spillArr[i].bilde;
    divEl.style.backgroundImage = `url(${spillArr[i].bilde})`
    navnEl.innerHTML = `${spillArr[i].navn}`;
    divEl.appendChild(navnEl);
    //divEl.appendChild(bildeEl)

}















