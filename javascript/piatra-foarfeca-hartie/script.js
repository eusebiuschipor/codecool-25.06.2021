const PIATRA = "Piatra".toUpperCase();
const HARTIE = "Hartie".toUpperCase();
const FOARFECA = "Foarfeca".toUpperCase();
console.log(PIATRA);
function getInput () {
    let input = prompt(`Alege ${PIATRA} ${HARTIE} sau ${FOARFECA}`).toUpperCase();
    if (input !== PIATRA && input !== HARTIE && input !== FOARFECA) {
        let randomChoice = getRandomChoice();
        alert(`Ai introdus alt cuvant si am ales ${randomChoice} pentru tine.`)
        return randomChoice;
    }else {
        return input;
    }
}

function getRandomChoice (){
    let randomValue = Math.floor(Math.random() * 9);
    if (randomValue < 3 ){
         return PIATRA;
    } else if(randomValue < 6){
        return HARTIE;
    } else{
        return FOARFECA;
    }

}

function getWinner(input, ai){
    if(input === PIATRA && ai === FOARFECA){
        alert(`Computerul a ales ${FOARFECA} . Felicitari, ai castigat!`);
    }else if (input === PIATRA && ai === PIATRA){
        alert(`Computerul a ales ${PIATRA}. Este remiza!`);
    }else if (input ===PIATRA){
        alert(`Computerul a ales ${HARTIE}. Ai pierdut!`);
    }
    if(input === FOARFECA && ai === HARTIE){
        alert(`Computerul a ales ${HARTIE} . Felicitari, ai castigat!`)
    }else if (input === FOARFECA && ai === FOARFECA){
        alert(`Computerul a ales ${FOARFECA}. Este remiza!`)
    }else if (input ===FOARFECA){
        alert(`Computerul a ales ${PIATRA}. Ai pierdut!`)
    }
    if(input === HARTIE && ai === PIATRA){
        alert(`Computerul a ales ${PIATRA} . Felicitari, ai castigat!`)
    }else if (input === HARTIE && ai === HARTIE){
        alert(`Computerul a ales ${HARTIE}. Este remiza!`)
    }else if (input ===HARTIE){
        alert(`Computerul a ales ${FOARFECA}. Ai pierdut!`)
    }
}


function game(){
    let input = getInput();
    let ai = getRandomChoice();
    getWinner(input, ai);
    
}