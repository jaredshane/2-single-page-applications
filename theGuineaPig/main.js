// When any section is clicked the output target text should be "You clicked on the {text of the section} section"

var section = document.querySelectorAll('section')
var outputElement = document.getElementById('output-target')
var h1Tag = document.querySelector('h1')
var guineaPig = document.getElementById('guinea-pig')
var addColor = document.getElementById('add-color')
var makeLarge = document.getElementById('make-large')
var addBorder = document.getElementById('add-border')
var addRounding = document.getElementById('add-rounding')
var buttons = document.querySelectorAll('button')



// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
for (var i = 0; i < section.length; i++) {
  section[i].addEventListener('click', function(event) {
    outputElement.innerHTML = "You clicked on the " + event.target.innerHTML + " section.";
  })
}

//When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".

h1Tag.addEventListener('mouseover', function(e) {
  outputElement.innerHTML = "You moved your mouse over the header"
})

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
h1Tag.addEventListener('mouseout', function(e) {
  outputElement.innerHTML = "You left me!!!"
})

//When you type characters into the input field, the output element should mirror the text in the input field.
document.getElementById('keypress-input').addEventListener('keyup', function (event) {
  outputElement.innerHTML += event.key
})

//When you click the "Add color" button, the guinea-pig element's text color should change to blue.

addColor.addEventListener('click', function(event) {
  guineaPig.classList.toggle('addBlue');
})

//When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.

makeLarge.addEventListener('click', function(event) {
  guineaPig.classList.toggle('makeBig')
})

//When you click the "Capture it" button, the guinea-pig element should have a border added to it.

addBorder.addEventListener('click', function(event) {
  guineaPig.classList.toggle('borderIt')
})

//When you click the "Rounded" button, the guinea-pig element's border should become rounded.

addRounding.addEventListener('click', function(event) {
  guineaPig.classList.toggle('roundIt')
})

//The first section's text should be bold.
section[0].classList.add('boldIt')

// The last section's text should be bold and italicized.
section[5].classList.add('boldAndItalicizeIt');

//Make the buttons stop appearing next to each other as inline elements. Change them into block elements.
for (var i = 0; i < buttons.length; i++) {
  buttons[i].classList.add('blockIt')
}
