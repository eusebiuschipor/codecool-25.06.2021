test();

// function expression
function test() {
    console.log('test');
}

// function declaration
//test2();

const test2 = () => {
    console.log('test 2');
}

test2();

//test3();
let test3 = function() {
    console.log('test 3');
}

test3();

//test4();

var test4 = function() {
    console.log('test 4');
}

test4();

const sum = (numbers) => {
    let sum = 0;

    for (const number of numbers) {
        sum += number;
    }

    return sum;
}

console.log(sum([1, 2, 3, 4]));

const sum2 = (...numbers) => {
    let sum = 0;

    for (const number of numbers) {
        sum += number;
    }

    return sum;
}

console.log(sum2(1, 2, 3, 4, 5, 6));

const sum3 = (a, b, ...numbers) => {
    let sum = 0;

    for (const number of numbers) {
        sum += number;
    }

    return sum;
}

console.log(sum3(1, 2, 3, 4, 5, 6));