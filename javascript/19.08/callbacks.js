// Callbacks

const sum = (...numbers) => {
    let sum = 0;

    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    }

    for (const num of numbers) {
        sum += validateNumber(num);
    }

    console.log(sum);
}

sum(1, 2, 3, 'eqwe');

const showResult = (result) => {
    console.log('Rezultatul este: ' + result);
}

const sum2 = (resultHandler, ...numbers) => {
    let sum = 0;

    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    }

    for (const num of numbers) {
        sum += validateNumber(num);
    }

    resultHandler(sum);
}

sum2(showResult, 1, 2, 3, 'eqwe');

const showMessage = (messageText, result) => {
    console.log(messageText + ' ' + result);
}

const combine = (resultHandler, operation, ...numbers) => {
    let sum = 0;

    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    }

    for (const num of numbers) {
        if (operation === 'ADD') {
            sum += validateNumber(num);
        } else {
            sum -= validateNumber(num);
        }
    }

    // pentru cazul 1
    // if (operation === 'ADD') {
    //     resultHandler('Rezultatul adunarii: ', sum);    
    // } else {
    //     resultHandler('Rezultatul scaderii: ', sum);   
    // }
    
    resultHandler(sum);   
}

// pentru cazul 1
// combine(
//     showMessage, 
//     'ADD', 
//     1, 
//     2, 
//     3, 
//     'eqwe'
// );

// this se refera la contextul de executie
// de fiecare data trebuie sa punem "this" ca prim parametru la functia bind, cand dorim sa preconfiguram o functie
combine(
    showMessage.bind(this, 'Rezultatul adunarii este: '), 
    'ADD', 
    1, 
    2, 
    3, 
    'eqwe'
);

combine(
    showMessage.bind(this, 'Rezultatul scaderii este: '), 
    'DIFF', 
    1, 
    2, 
    3, 
    'eqwe'
);