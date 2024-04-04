let spillEl = document.querySelector('#spill')



let boks1 = {
    navn: "Flappy",
    bilde: "bilder_index/flappy-bird.jpg",
    lenke: "flappybird/Flappybird.html"
}
let boks2 = {
    navn: "Tre på rad",
    bilde: "tre på rad/bilder-tre_po_rad/tic.jpg",
    lenke: "tre på rad/tre_po_rad.html"
}
let boks3 = {
    navn: "Egg i kurv",
    bilde: "bilder_index/fugl.jpeg",
    lenke: "flappybird/Flappybird.html"
}


let spillArr = [boks1, boks2, boks3]

for(i=0; i<spillArr.length; i++){
    let divEl = document.createElement('div');
    spillEl.appendChild(divEl);

    

    let navnEl = document.createElement('a');
    divEl.style.backgroundImage = `url(${spillArr[i].bilde})`
    navnEl.innerHTML = `${spillArr[i].navn}`;
    divEl.appendChild(navnEl);
    navnEl.href = spillArr[i].lenke


}

















