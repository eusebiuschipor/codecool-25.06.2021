const buttonToggle = document.getElementById("change-color")

buttonToggle.addEventListener("click", (event) => {

    // if (event.target.style.background !== "red"){
    //     event.target.style.background = "red" 
    // }else {
    //     event.target.style.background = "grey"
    // }
    
    event.target.classList.toggle("red");
})