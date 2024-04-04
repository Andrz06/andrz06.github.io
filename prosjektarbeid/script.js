let spillEl = document.querySelector('#spill')



let boks1 = {
    navn: "Flappy",
    bilde: "bilder_index/flappy-bird.jpg",
    lenke: "flappybird/Flappybird.html"
}
let boks2 = {
    navn: "Tre på rad",
    bilde: "tre_po_rad/bilder-tre_po_rad/tic.jpg",
    lenke: "tre_po_rad/tre_po_rad.html"
}
let boks3 = {
    navn: "Egg i kurv",
    bilde: "bilder_index/fugl.jpeg",
    lenke: "flappybird/Flappybird.html"
}


let spillArr = [boks1, boks2, boks3]

for(i=0; i<spillArr.length; i++){

    /*  divEl.setAttribute("id", spillArr[i].navn)
    divEl.addEventListener ('click', function(e){
        console.log(e.target.id)
    }) */
    
    let lenkeEl = document.createElement('a')
    lenkeEl.href = `${spillArr[i].lenke}`;
    

    let divEl = document.createElement('div');
    divEl.style.backgroundImage = `url(${spillArr[i].bilde})`

    let navnEl = document.createElement('p');
    navnEl.innerHTML = `${spillArr[i].navn}`;
    
    lenkeEl.appendChild(navnEl);
    divEl.appendChild(lenkeEl);
    spillEl.appendChild(divEl);

}

















