let spillEl = document.querySelector('#spill')

// Dette er en kommentar.

let boks1 = {
    navn: "flappy",
    bilde: "bilder_index/fugl.jpeg",
}
let boks2 = {
    navn: "minecraft",
    bilde: "bilder_index/fugl.jpeg",
}
let boks3 = {
    navn: "fortnite",
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

    let navnEl = document.createElement('p');
    //let bildeEl = document.createElement('img')
    //bildeEl.src = spillArr[i].bilde;
    divEl.style.backgroundImage = `url(${spillArr[i].bilde})`
    navnEl.innerHTML = `${spillArr[i].navn}`;
    divEl.appendChild(navnEl);
    //divEl.appendChild(bildeEl)

}















