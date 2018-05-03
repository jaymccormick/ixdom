// selections

// single element that can be accessed directly
const myButton = document.getElementById('myButton');
const textInput = document.getElementById('changeColor');

// selecting by tag or class: multiple elements returned as an array
const heading = document.getElementsByTagName('h1')[0];
const myParagraph = document.getElementsByTagName('p');
const myList = document.querySelectorAll('li');
const redThing = document.getElementsByClassName('red-thing');
const purpleThing = document.querySelectorAll('.purple-thing');

const input = document.querySelector('input.description');
const para = document.querySelector('p.description');
const button = document.querySelector('button.description');

button.addEventListener('click', () => {
  console.log('worked');
  para.textContent = input.value + "!";
  input.value = "";
});

heading.addEventListener('click', () => {
  heading.style.color = 'grey';
});
myButton.addEventListener('click', () => {
  heading.style.color = textInput.value;
  textInput.value = '';
});

for (let i = 0; i < myList.length; i++ ){

  myList[i].addEventListener('click', () => {
    if (myList[i].className === "purple-thing"){
      myList[i].style.color = "purple";
      myList[i].style.fontWeight = 'bold';
    }
  });
}

for (let i = 0; i < redThing.length; i++ ){

  redThing[i].addEventListener('click', () => {
      redThing[i].style.color = 'red';
  });
}

const evens = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < evens.length; i++){
  evens[i].addEventListener('click', () => {
      evens[i].style.backgroundColor = "#f7f7f7";
  });
}
