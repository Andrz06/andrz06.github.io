//let pizzabunnEls = document.querySelectorAll('input[type="radio"]')
//let storrelseEl = document.querySelector('select')
//let annetEl = document.querySelector('textarea')
//let submitBtn = document.querySelector('button[type="submit"]')

/* susbmitBtn.addEventListener('click', function(e){
    //e.preventDefault()
    console.log("Sender din bestilling")

    let pizza = {}
        for(i=0; i<pizzabunnEls.length; i++){
            if(pizzabunnEls[i].checked){
                pizza.bunn = pizzabunnEls[i].parentElement.innerText
            }
        }
        let toppingArr = []

        //Traverserer arrayet ved hjelp av forEach
        toppingEls.forEach(toppingEl => {
            if(toppingEl.checked){
                toppingArr.push(toppingEl.parentElement.innerText)
            }
        })
        pizza.topping = toppingArr

        //Henter størrelse
        pizza.storrelse = storrelseEl.value

        //Henter annen informasjon
        pizza.annet = annetEl.value

        console.log(pizza)
        

}) */
let ratingEl = document.querySelector('select')
let favoriteEls = document.querySelectorAll('input[type="radio"]')

let elseEl = document.querySelector('textarea')
let submitBtn = document.querySelector('button[type="submit"]')

submitBtn.addEventListener('click', function(e){
    let feedback = {}
    feedback.rating = ratingEl.value

    for(i=0; i<favoriteEls.length; i++){
        //console.log(favoriteEls.[i].parentElement.innerText)
        if(favoriteEls[i].checked){
            feedback.favorite = favoriteEls.value
        }
    }
    feedback.else = elseEl.value

    console.log(feedback)
    
})


