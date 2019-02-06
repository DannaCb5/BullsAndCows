
// Option 1. - let div = document.getElementById("div")

// Option 2. - document.querySelector("#create") for id or ("create") if !id

// Option 3. - document.getElemenntById().appendChild(div)


document.getElementById("press").addEventListener("click", function(){
    document.getElementById("PressMyButton").innerHTML += "Good Job! ";
    document.getElementById("PressMyButton").innerHTML += "You're Almost there! "
});
document.getElementById("press")
.addEventListener("click", function(){
    document.getElementById("PressMyButton").innerHTML += "Second Try! ";
    document.getElementById("PressMyButton").innerHTML += "Here we go! "
});