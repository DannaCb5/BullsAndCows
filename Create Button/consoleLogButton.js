let parent = document.querySelector(".parent");
let debug = document.querySelector(".debug");

let inputEl = document.createElement("input");
inputEl.setAttribute("type", "text");

let buttonEl = document.createElement("button");
buttonEl.innerHTML = "Button Times";

parent.appendChild(inputEl);
parent.appendChild(buttonEl);

parent.addEventListener("click", function(event) {
  if(event.target == buttonEl) {
    debug.innerHTML += "<br>" + inputEl.value;
    console.log(inputEl.value);
  }
})
