# Multi Color Buttons

## Story

Everybody knows that scouts collect badges.
The more badges you have the more respect you earn.
Now you want to have your first (or next if you are already a scout) scout badge.
And that badge is the `DOM manipulator`.
To earn this badge you need to finish this project.

## What are you going to learn?

- Manipulating the DOM
- The basic syntax of Javascript

## Tasks

1. In the folder `jumping-button`, you find the files you need to implement a "jumping" button. When someone clicks the button, it goes from the right to the left and the button's text changes to `Go Left!`.  When we click again it goes to the left and the text changes to `Go Right!`.
    - When we open up the file `jumping-button/index.html` a button is on the left side of its container, the text on it is `Go Right!`
    - When the button is on the left side, when we click it goes to its container's right side
    - When the button is on the right side, the text on it is `Go Left!`
    - When the button is on the right side, when we click it, it goes to its container's left side

2. The `change-my-color` folder contains files for implementing a color changing button. When the button in `change-my-color/index.html` is clicked, it must change its background color to red. When clicked again, it switches back its background color to the default value.
    - When the button in `change-my-color/index.html` is clicked, the button's background color is changing to `red`
    - When the button is clicked again, the button's background color changes back to default

3. In the folder `change-others-color` you find the tools for your next task. When the button in `change-others-color/index.html` is clicked, it changes the background color of the `span` element to `red`.
    - When we click the button in `change-others-color/index.html`, the element next to it changes its background color to `red`

4. You need to implement a basic click counter in the `counter` folder. When the button in `counter/index.html` is clicked, the number on it increases by one.
    - If we click the button in `counter/index.html`, the number on it is increasing by one on each click

## General requirements

None

## Hints

- Use the `window.addEventListener("load", function(){ })` to write your code.
- You can change the style of an element with JS by changing the style property directly but changing the element's class and you declare a CSS class for that is the better pattern.
- Also instead of the `element.onclick = function() {  }` you could use the `element.addEventListener("click", function() {  })` method.
- When you want to get an element, you can save and reuse the element in a variable like `let button = document.getElementById("myButton")`.
  After that, you can add new classname to that element by `button.classList.add("newClass")`.
  In this situation you tell the `button` variable refer to the element with the `id` property of `myButton`.

## Background materials

- <i class="far fa-exclamation"></i> [DOM manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- <i class="far fa-exclamation"></i> [Click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)
- <i class="far fa-book-open"></i> [What is DOM?](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
