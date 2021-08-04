//var myName = 'Gigel';

const myName = prompt('Introdu numele');
let hobbies;

if (myName === 'Gigel') {
    alert('Te cheama Gigel');

    hobbies = ['Sport', 'JavaScript'];
    alert(`Hoby-ul principal este ${hobbies[0]}`);
    alert(`Hoby-uri ${hobbies[0]}, ${hobbies[1]}`);
} else if (myName === 'Ion') {
    alert('Te cheama Ion');
} else {
    alert('alt nume');
}

function greet() {
    let myAge = 30;
    let myName = 'Ion';
    console.log('myName: ', myName);
    console.log('myAge: ', myAge);
}

greet();

console.log(myName);
//console.log(myAge);

console.log(hobbies);

{
    var test = 5;
    console.log(test);
}

console.log(test);