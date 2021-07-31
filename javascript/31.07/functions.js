function greet(greeting) {
    // Cod care o sa fie executat atunci cand se apasa butonul care foloseste functioa "greet"
    // greeting este parametrul care poate avea valoarea "Hello" sau "Salut",
    // in functie de butonul care este apasat

    let name = document.getElementById('textbox').value;

    if (name === '') {
        document.getElementById('content').innerText = 'Please enter your name!';
    } else {
        document.getElementById('content').innerText = greeting + ' ' + name;
    }
}

// const buttonGreetInEnglish = document.getElementById('greet-in-english');
// buttonGreetInEnglish.addEventListener('click', function() {
//     greet('Hello');
// });

// const buttonGreetInRomanian = document.getElementById('greet-in-romanian');
// buttonGreetInRomanian.addEventListener('click', function() {
//     greet('Salut');
// });

const buttonGreetInEnglish = document.getElementById('greet-in-english');
const buttonGreetInRomanian = document.getElementById('greet-in-romanian');

buttonGreetInEnglish.onclick = function() {
    greet('Hello');
}

buttonGreetInRomanian.onclick = function() {
    greet('Salut');
}

function greetStudent(student) {
    alert(`Hello ${student}!`);
}

// greetStudent('Gheorghe');
// greetStudent('Tudor');

function timeRemaing(timeElapsed, endTime) {
    return endTime - timeElapsed;
}

let leftTime1 = timeRemaing(42, 240);
let leftTime2 = timeRemaing(50, 300);

// alert(`leftTime1: ${leftTime1}`);
// alert(`leftTime2: ${leftTime2}`);

function addTwo(number) {
    return number + 2;
}

const finalAnswer = addTwo(5);
// alert(finalAnswer);
// alert(addTwo(100));

const finalAnswer2 = addTwo;
//alert(finalAnswer2(10));

function greetSomeone(firstName, lastName, greeting) {
    return `${greeting} ${firstName} ${lastName}`;
}

// alert(greetSomeone('Bill', 'Gates', 'Hello'));
// alert(greetSomeone('Elon', 'Musk', 'Hello'));

function printDetails(address, country, name) {
    alert(`Details: ${address} ${country} ${name}`);
}

let myAddress = 'Bucuresti';
let myCountry = 'Romania';
let myName = 'Ionel';

printDetails(myAddress, myCountry, myName);
printDetails('Paris', 'France', 'Vasilica');

// Traditional function
function test(a) {
    return a + 100;
}

// Arrow function
let test2 = a => a + 100;

let test3 = (a, b) => a + b + 100;

let test4 = (a, b) => {
    return a + b;
}

console.log(test(10));
console.log(test2(20));
console.log(test3(30, 40));
console.log(test3(50, 60));



