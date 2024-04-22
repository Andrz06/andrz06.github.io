let spillEl = document.querySelector('#spill')



let boks1 = {
    navn: "Whac a mole",
    bilde: "whac_a_mole/bilder_mole/beaverhome.jpg",
    lenke: "whac_a_mole/mole.html"
}
let boks2 = {
    navn: "Tic tac toe (2 player)",
    bilde: "tic_tac_toe/bilder-tre_po_rad/tictactoe.webp",
    lenke: "tic_tac_toe/tic_tac_toe.html"
}
let boks3 = {
    navn: "True or false",
    bilde: "API/bilder_API/truefalse.jpg",
    lenke: "API/truefalse.html"
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