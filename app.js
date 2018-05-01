// selections

const heading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const textInput = document.getElementById('changeColor');

heading.addEventListener('click', () => {
  heading.style.color = 'grey';
});
myButton.addEventListener('click', () => {
  heading.style.color = textInput.value;
  textInput.value = '';
});
