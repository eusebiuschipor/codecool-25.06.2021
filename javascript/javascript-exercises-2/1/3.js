/*
    Write a JavaScript program that read a string from an input and check if the string is palindrom or not. Eg: "madam" is palindrom.
*/
function textIsPalindrome(text) {  
     /*
        - Avem parametrul "text" care este textul din input 
        - Formam un array (o lista) cu toate literele textului - split('')
        - Inversam lista - reverse()
        - Dupa ce am inversat lista, o transformam in string - join('')
        - Rezultatul o sa fie textul inversat
    */

    /*
        text = salut
        text.split('') => ['s', 'a', 'l', 'u', 't']
        text.split('').reverse() => ['t', 'u', 'l', 'a', 's']
        text.split('').reverse().join('') => 'tulas'

        text === reversedText => 'salut' === 'tulas' => false
    */
    const listaMea = ['dsfs', 'fdsfsdfs', 'fsdfsd']
    
    const reversedText = text.split('').reverse().join('');
    
    // if (text === reversedText) {
    //     return true;
    // } else {
    //     return false;
    // }

    return text === reversedText;
}

function checkIfInputIsPalindrome() {
    let text = document.getElementById('textbox').value;
    let containerResult = document.getElementById('content');

    // if (text === '') {
    //     containerResult.innerText = 'Te rog introdu un text';
    // } else {
    //     if (textIsPalindrome(text) === true) {
    //         containerResult.innerText ='Textul este Palindrome';
    //     } else {
    //         containerResult.innerText = 'Textul nu este Palindrome';
    //     }
    // }

    if (text === '') {
        containerResult.innerText = 'Te rog introdu un text'; 
        return; // iesim din functie
    }
    
    // aici ajungem doar daca avem text in input
    if (textIsPalindrome(text) === true) {
        containerResult.innerText = 'Textul este Palindrome';
    } else {
        containerResult.innerText = 'Textul nu este Palindrome';
    }
}