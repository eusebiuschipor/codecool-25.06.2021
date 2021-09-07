const person = {
    name: 'Ion',
    favoriteFood: 'pizza',
    address: {
        city: 'Bucuresti',
        coutry: 'Romania',
    }
}

console.log(person);
console.log(person.name);
console.log(person['favoriteFood']);
console.log(person.address.city);

const propName = 'name';
console.log(person[propName]);

const person1 = {
    age: 20
};

const person2 = {
    age: 30
};

const person3 = {
    age: 50
};

function suggestCar(person) {
    if (person.age < 30) {
        console.log('Cumpara-ti Vw');
    } else {
        console.log('Cumpara-ti Mercedes');
    }
}

suggestCar(person1);
suggestCar(person2);
suggestCar(person3);

const programmer = {
    name: 'Mike',
    printProgrammingLanguage: function() {
        console.log('I like JavaScript');
    }
}

console.log(programmer.name);
programmer.printProgrammingLanguage();

// Constructor function 1
function createNewCar(name) {
    const obj = {};

    obj.name = name;
    obj.printCarName = function() {
        console.log('Car name: ', obj.name);
    }

    return obj;
}

const bmw = createNewCar('BMW');
const mercedes = createNewCar('Mercedes');

bmw.printCarName();
mercedes.printCarName();

// Constructor function 2
// Car este o clasa (un tip de data utilizat in aplicatie)
function Car(name, color) {
    // constructor
    this.name = name;
    this.color = color;

    this.printCarDetails = function() {
        console.log(`Nume: ${name}, culoare: ${color}`);
    }
}

// let vw = {
//     name: '',
//     color: ''
// }
// let vw = {
//     name: '',
//     color: ''
// }
// let vw = {
//     name: '',
//     color: ''
// }
// let vw = {
//     name: '',
//     color: ''
// }
let vw = new Car('VW', 'black');
let audi = new Car('Audi', 'white');

vw.printCarDetails();
audi.printCarDetails();

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printDetails() {
        console.log(this.name, this.age);
    }
}

const pers1 = new Person('Ion', 20);
const pers2 = new Person('Vasile', 50);

pers1.printDetails();
pers2.printDetails();