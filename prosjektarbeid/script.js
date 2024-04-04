let spillEl = document.querySelector('#spill')



let boks1 = {
    navn: "Flappy",
    bilde: "bilder_index/flappy-bird.jpg",
    lenke: "flappybird/Flappybird.html"
}
let boks2 = {
    navn: "Tre på rad",
    bilde: "bilder_index/fugl.jpeg",
    lenke: "tre på rad/tre_po_rad.html"
}
let boks3 = {
    navn: "Egg i kurv",
    bilde: "bilder_index/fugl.jpeg",
    lenke: "flappybird/Flappybird.html"
}
let boks4 = {
    navn: "fortnite",
    bilde: "bilder_index/fugl.jpeg",
    lenke: "flappybird/Flappybird.html"
}
let boks5 = {
    navn: "fortnite",
    bilde: "bilder_index/fugl.jpeg",
    lenke: "flappybird/flappytest.html"
}

let spillArr = [boks1, boks2, boks3, boks4, boks5]

for(i=0; i<spillArr.length; i++){
    let divEl = document.createElement('div');
    spillEl.appendChild(divEl);

    

    let navnEl = document.createElement('a');
    divEl.style.backgroundImage = `url(${spillArr[i].bilde})`
    navnEl.innerHTML = `${spillArr[i].navn}`;
    divEl.appendChild(navnEl);
    navnEl.href = spillArr[i].lenke


}

















