Goal: console log user input on button click

ADD TO HTML:
<!DOCTYPE html>
<html>
<body>
</body>
</html>

1. Create html/js files and link them.

ADD SCRIPT LAST IN HTML BODY:

<!DOCTYPE html>
<html>
<body>
<script src="consoleLogButton.js"> </script>
</body>
</html>



2. In html add a div to be selected by js.

ADD IN HTML BODY ABOVE SCRIPT:

<!DOCTYPE html>
<html>
<body>
<div></div>
<script src="consoleLogButton.js"> </script>
</body>
</html>

<div class="parent"></div>
<div class="debug"></div>

3. Select the div in js and set to a variable.

ADD IN JS:

let clickString = document.getElementTagName("div");

// let parent = document.querySelector(".parent");
// let debug = document.querySelector(".debug");

4. Create an input element and set the typ attribute to text.

ADD IN js:

let input = document.createElement("input");
input.type = "text";

// let inputEl = document.createElement("input");
// inputEl.setAttribute("type", "text");

5. Create a button element.

ADD IN JS AFTER LET clickString:

ADD TO JS:

let firstButton = createElement("button");

// let buttonEl = document.createElement("button");
// buttonEl.innerHTML = "Button Times";

6. Append elements from steps 4 & 5 to selected elements from step 3.

ADD ASSIGMENT TO JS:

clickString.appendChild(firstButton);

// parent.appendChild(inputEl);
// parent.appendChild(buttonEl);

7. Add a click event listener to step 3's element.

ADD TO JS:


clickString.addeEventListener("click", function() {

});

8a. In the event listener, console log a string.
8b. If the target of the event is step 5's button then.

ADD COMPARISON TO THE LIST:

clickString.addeEventListener("click", function(
    if (clickstring.target != firstButton) {
    } else {     
    console.Log("The target was equal to firstButton");
    }
);

// parent.addEventListener("click", function(event) {
//   if(event.target == buttonEl) {
//    debug.innerHTML += "<br>" + inputEl.value;
//    console.log(inputEl.value);
//  }
// })

9. Change the value of the string from step 8b to equal the value of the input from step 4.

