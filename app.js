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
const ul = document.querySelector('ul.add-item');

const hideButton = document.querySelector('button.hide-button');
const hideList = document.querySelector('.hide-list');

const makeThingInput = document.querySelector('input.make-thing');
const makeThingButton = document.querySelector('button.make-thing');
const makeThingUL = document.querySelector('ul.make-thing');
const removeThingButton = document.querySelector('button.remove-thing');
const anotherRemover = document.querySelector('button.another-remover');

makeThingButton.addEventListener('click', () => {
  let li = document.createElement('li');
  li.textContent = makeThingInput.value;
  makeThingInput.value = '';
  makeThingUL.appendChild(li);
});

removeThingButton.addEventListener('click', () => {
  let items = document.querySelectorAll('ul.make-thing li');
  let itemsLength = items.length - 1;
  makeThingUL.removeChild(items[itemsLength]);
});

anotherRemover.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[2];
  let li = document.querySelector('ul.make-thing li:last-child');
  ul.removeChild(li);
});

hideButton.addEventListener('click', () => {
  if (hideList.style.display == 'none'){
    hideList.style.display = 'block';
    hideButton.textContent = 'show';
  } else {
  hideList.style.display = 'none';
  hideButton.textContent = 'hide';
  }
});

button.addEventListener('click', () => {
  para.textContent = input.value + "!";
  // para.title = input.value;
  ul.innerHTML += "<li>" + input.value + "</li>";
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
