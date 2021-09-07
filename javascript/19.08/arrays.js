const numbers = [1, 3, 5, 7, 234, 435, 565];
console.log(numbers);

// filtram array-ul, pastrand doar numeerele mai mari decat 10
const filteredArray = numbers.filter(number => number > 10);
console.log(filteredArray); 

// reduce
let sum = 0;

numbers.forEach((number) => {
    sum += number;
});

console.log(sum);

const sumWithReduce = numbers.reduce((result, currentValue) => {
    return result + currentValue;
}, 0);

console.log(sumWithReduce);

