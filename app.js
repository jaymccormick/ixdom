// selections

// single element that can be accessed directly
const myButton = document.getElementById('myButton');
const textInput = document.getElementById('changeColor');

// selecting by tag: multiple elements returned as an array
const heading = document.getElementsByTagName('h1')[0];
const myParagraph = document.getElementsByTagName('p');
const myList = document.getElementsByTagName('li');

heading.addEventListener('click', () => {
  heading.style.color = 'grey';
});
myButton.addEventListener('click', () => {
  heading.style.color = textInput.value;
  textInput.value = '';
});

for (let i = 0; i < myList.length; i++ ){
  myList[i].addEventListener('click', () => {
    myList[i].style.color = "#4caf50";
  })
}
