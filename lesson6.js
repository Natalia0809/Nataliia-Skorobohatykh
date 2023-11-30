// task 1
document.addEventListener('DOMContentLoaded', function() {
const divElement = document.getElementById("test");
divElement.innerHTML = "Last";
});

document.addEventListener('DOMContentLoaded', function() {
const divElement = document.querySelector('#test');
divElement.innerHTML = "Last";
});

// task 2
document.addEventListener('DOMContentLoaded', function () {
document.querySelector('.image').src = "cat.jpg";
});


// task 3 
document.addEventListener('DOMContentLoaded', function () {
const paragraphs = document.querySelectorAll('#text p');
    paragraphs.forEach(function (paragraph, index) {
    console.log('Selector text ' + index + ': ' + paragraph.textContent);
  });
});

//task 4

const list = document.querySelector('#list')
const firstElement = list.firstElementChild.innerHTML
const lastElement = list.lastElementChild.innerHTML
const lastElement2 = list.children[list.children.length - 1].innerHTML
const secondElement = list.firstElementChild.nextElementSibling.innerHTML
const fourthElement = list.children[3].innerHTML
const thirdElement = list.children[2].innerHTML
    
alert(`${firstElement}, ${lastElement}, ${secondElement}, ${fourthElement}, ${thirdElement}`)

// task 5
document.addEventListener('DOMContentLoaded', function () {
const h1Element = document.querySelector('h1');
h1Element.style.fontWeight = 'bold';
h1Element.style.backgroundColor = 'green';
h1Element.style.color = 'black'; 
    
const paragraphs = document.querySelectorAll('#myDiv p');
paragraphs[0].style.fontWeight = 'bold'; 
paragraphs[1].style.color = 'red'; 
paragraphs[2].style.textDecoration = 'underline'; 
paragraphs[3].style.fontStyle = 'italic'; 
    
const my_list = document.getElementById('myList');
my_list.style.display = 'flex';
my_list.style.listStyleType  = 'none';
my_list.fontSize = '26';


const invisibleSpan = document.getElementsByTagName('span')[0];
invisibleSpan.style.display = 'none';
});

// task 6

let message1 = prompt("Enter the 1st message:");
let message2 = prompt("Enter the 2nd message:");
 
document.getElementById("input1").value = message1;
document.getElementById("input2").value = message2;

const temp = document.getElementById("input1").value;
document.getElementById("input1").value = document.getElementById("input2").value;
document.getElementById("input2").value = temp;

// task 7 are in separate files tasks7.js and index1.html