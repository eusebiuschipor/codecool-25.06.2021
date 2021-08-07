const toggle =document.getElementById("flip-flop");

toggle.addEventListener("click", function(event) {
    /*
        parametrul event = eventul de click
        event.target = elementul pe care am facut click
    */

    if (event.target.classList.contains("right")) {
       event.target.classList.remove("right")
       event.target.textContent = "Go right"
    } else {
        event.target.classList.add("right")
        event.target.textContent = "Go left"
    }
})