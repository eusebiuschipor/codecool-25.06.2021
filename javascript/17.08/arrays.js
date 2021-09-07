const numbers = [1];
console.log(numbers);

const numbers2 = new Array(5);
console.log(numbers2);

const numbers3 = Array.of(1, 2, 3);
console.log(numbers3);

const numbers4 = Array.from([1, 2, 3]);
console.log(numbers4);
const numbers5 = Array.from('Hi!');
console.log(numbers5);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ['Cooking', 'Cooding'];
const hobbies2 = ['r', 'Cfsdfsdooding'];
const personalData = [30, 'Sebi', { moreDetail: ['test', 'test2'] }];
const data = [[1, 2], [3, 4, 5]];
console.log(data[1][0]);

hobbies.push('test');
hobbies.unshift('test2');
console.log(hobbies);
hobbies.pop();
console.log(hobbies);
hobbies.shift();
console.log(hobbies);

hobbies.splice(1, 0, 'test-3');
console.log(hobbies);

const hobbies3 = hobbies.concat(hobbies2);
console.log(hobbies3);

console.log(hobbies3.indexOf('test-3'));

const personData = [{name: 'Ion', age: 20}, {name: 'Gheorghe', age: 30}];
console.log(personData.indexOf({name: 'Ion', age: 20}));

const person = personData.find((person) => {
    return person.name === 'Ion';
});
console.log(person);

console.log(hobbies.includes('Cooking'));

const prices = [10.99, 11.99, 3.99, 4.99];
const tax = 0.19;
let taxAdjustedPrices = [];

for (const price of prices) {
    taxAdjustedPrices.push(price + (price * tax));
}

taxAdjustedPrices = [];

prices.forEach((price, idx) => {
    const priceObj = {index: idx, noTaxPrice: price, taxPrice: price + (price * tax)}
    taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices);

const pricesWithTax = prices.map((price, idx) => {
    const priceObj = {index: idx, noTaxPrice: price, taxPrice: price + (price * tax)}
    return priceObj;
});

console.log(pricesWithTax);

prices.sort((a, b) => {
    if (a < b) {
        return 1;
    } else if (a === b) {
        return 0;
    } else {
        return -1;
    }
});

console.log(prices);