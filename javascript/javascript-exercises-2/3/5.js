/*
    Write a JavaScript program that read a string from input and converts the first letter of each word of the string in upper case. Example string : 'the quick brown fox'
    Expected Output : 'The Quick Brown Fox'
*/
function upperCaseLetter() {
    let text = document.getElementById('textbox').value;
    let containerResult = document.getElementById('content');

    if (text === '') {
        alert('Te rog sa introduci un text');
        return;
    }

    let listaCuvinteUpperCase = [];
    let listaCuvinte = text.split(' ');
    
    listaCuvinte.forEach(function(cuvant) {
        let cuvantUppercase = cuvant.charAt(0).toUpperCase() + cuvant.slice(1);
        listaCuvinteUpperCase.push(cuvantUppercase);
    })

    let newText = listaCuvinteUpperCase.join(' ');
    containerResult.innerText = newText;
}