// task 7

let body = document.getElementsByTagName('body')[0];
let mainElement = document.createElement('main');
mainElement.className = 'mainClass check item';

let divElement = document.createElement('div');
divElement.id = 'myDiv';

let paragraphElement = document.createElement('p');
paragraphElement.textContent = 'First paragraph';

divElement.appendChild(paragraphElement);
mainElement.appendChild(divElement);
document.body.appendChild(mainElement);