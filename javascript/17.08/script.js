//console.log(userName);
let userName = 'Mike';

// Primitive values
let user = 'Max'; // string 

// Obiectele si array-urile nu sunt tipuri de date primitive
// objects si arrays sunt reference values

let anotherUser = user;
console.log(anotherUser); // Max
user = 'Ion';
console.log(user); // Ion
console.log(anotherUser); // Max

///////////


let hobbies = ['Coding', 'Sport'];
console.log(hobbies);

let newHobbies = hobbies;
console.log(newHobbies);

hobbies.push('Cooking');
console.log(hobbies);
console.log(newHobbies);

let person = {age: 30};
console.log(person);

let anotherPerson = person;
console.log(anotherPerson);

anotherPerson.age = 40;
console.log(anotherPerson);
console.log(person);

let copyOfPerson = { ...person }; // creeaza o copie a obiectului person
console.log('copyOfPerson: ', copyOfPerson);
console.log('person: ', person);
copyOfPerson.age = 50;

console.log('copyOfPerson: ', copyOfPerson);
console.log('person: ', person);

let copyOfHobbies = [ ...hobbies ]; // creeaza o copie a array-ului hobbies
console.log('copyOfHobbies: ', copyOfHobbies);
console.log('hobbies: ', hobbies);

copyOfHobbies.push('new hobby');
console.log('copyOfHobbies: ', copyOfHobbies);
console.log('hobbies: ', hobbies);

const person1 = {age: 30};
const person2 = {age: 30};

console.log(person1 === person2);

const arr1 = ['test'];
const arr2 = ['test'];

console.log(arr1 === arr2);