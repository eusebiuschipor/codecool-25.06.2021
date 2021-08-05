/*
    Write a JavaScript program that read a string from input and show the string letters in alphabetical order. Example string: 'webmaster'. Expected Output: 'abeemrstw'.
*/
function putLettersInAlphabeticalOrder() {
    let text = document.getElementById('textbox').value;
    let container = document.getElementById('content');

    if (text === '') {
        alert ('introdu text');
        return;
    }

    /*
        text = 'webmaster'
        text.split('') => ['w', 'e', 'b', 'm', 'a', 's', 't', 'e', 'r']
        text.split('').sort() => ['a', 'b', 'e', 'e', 'm', 'r', 's', 't', 'w']
        ext.split('').sort().join('') => 'abeemrstw'
        sortedString => 'abeemrstw'
        container.innerText => sortedString => 'abeemrstw'
    */

    let listaCuLitereleTextului = text.split('');
    let listaCuLitereleTextuluiSortata = listaCuLitereleTextului.sort();
    let stringFormatDinListaCuLitereleTextuluiSortata = listaCuLitereleTextuluiSortata.join('');
    container.innerText = stringFormatDinListaCuLitereleTextuluiSortata;

    //let sortedString = text.split('').sort().join('');
    //container.innerText = sortedString;
    
}