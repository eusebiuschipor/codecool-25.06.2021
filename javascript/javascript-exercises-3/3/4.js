/*
    Read a word from an input. The readed text is shown in from 3 to 3 seconds the last letter is moved at the start of the word.
*/
const resultContainer = document.getElementById('content');

const animateButton = document.getElementById('animate');
animateButton.onclick = function() {
    const text = document.getElementById('text').value;

    if (text === '') {
        resultContainer.innerText = 'Te rog sa introduci un text';
    } else {
        animateText(text);
    }
}

function animateText(text) {
    // CODECOOL
    // LCODECOO
    // OLCODECO
    // OOLCODE

    resultContainer.innerText = text;
    let textToAnimate = text;

    setInterval(function() {
        let newText = textToAnimate[textToAnimate.length - 1] + textToAnimate.substring(0, textToAnimate.length - 1);
        resultContainer.innerText = newText;
        textToAnimate = newText;
    }, 3000);
}

// 0 1 2  3  4
// A B C  D  E
// ABCDE => LENGTH = 5
