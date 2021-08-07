const button = document.getElementById("count");

button.addEventListener("click", function(event) {
    let currentNumber = Number(event.target.textContent);
    
    
    currentNumber++;

    if (currentNumber > 5) {
        currentNumber = 0;
    }

    event.target.textContent = currentNumber;
})
