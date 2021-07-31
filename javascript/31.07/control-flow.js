/*
    === (verifica daca doua variabile sunt egale)

    !== (verifica daca doua variabile sunt diferite)

    a > b (verifica daca a este mai mare decat b)

    a >= b (verifica daca a este mai mare sau egal decat b)

    && (SI = verifica daca ambele conditii sunt indeplinite)

    || (SAU = verifica daca cel putin una din conditii este indeplinita)

    A && A = A
    A && F = F
    F && A = F
    F && F = F
    A | | A = A
    A | | F = A 
    F | | A = A 
    F | | F = F
*/

// const afaraEsteCald = false;

// if (afaraEsteCald === true) {
//     alert('E bine sa stai in casa');
// } else {
//     alert('Poti iesi in parc');
// }

// let temperatura = 35;

// if (temperatura >= 40) {
//     alert('Este prea cald');
// } else if (temperatura > 30) {
//     alert('Temperatura este intre 30 si 40 de grade');
// } else if (temperatura === 30) {
//     alert('Sunt 30 de grade');
// } else {
//     alert('Temperatura este ok');
// }

// if (2 + 2 === 4) {
//     alert('OK');
// } else {
//     alert('NOT OK');
// }

// let anotimp = 'vara';

// if (anotimp !== 'iarna') {
//     alert('Nu ai nevoie de geaca');
// } else {
//     alert('Ai nevoie de geaca');
// }

let stundentiPrezenti = 2;

if (stundentiPrezenti >= 10) {
    alert('Este bine');
} else if (stundentiPrezenti > 5 && stundentiPrezenti < 10) {
    alert('Nu este prea bine');
} else if (stundentiPrezenti === 0 || stundentiPrezenti === 1) {
    alert('E mentorul singur la curs sau cu un singur student');
} else {
    alert('Sunt cel putin doi studenti la curs');
}