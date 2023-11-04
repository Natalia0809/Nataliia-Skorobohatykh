//task 2
alert('Skorobohatykh');  
//task 3
let firstName = 'Anna';
let secondName = 'Maria'
alert(`${firstName} ${secondName}`);
firstName = secondName
alert(`${firstName} ${secondName}`);
//task 4
const client = {
    userlogin: "MaxJordan",
    phone: "1234566",
    isvalid: "True",
    age: null,
    email:undefined,
    }
//task 5
let isAdult = confirm ("Are you older than 18?");
console.log(isAdult);
//task 6
let username = 'Natalia';
console.log(typeof username);
let lastName = "Skorobohatykh";
console.log(typeof lastName);
let studyGroup = "Second";
console.log(typeof studyGroup);
let birthYear = 1993;
console.log(typeof birthYear);
let isMarried = false;
console.log(typeof isMarried);
console.log(birthYear);
console.log(isMarried);
console.log(username);
let age = null;
console.log(typeof age);
let city = undefined;
console.log(typeof city);
//task 7
let login = prompt ("Enter your login","NataliaS");
alert(login);
let email = prompt("Enter your email", "one@example.com");
alert (email);
let password = prompt ("Enter your password", "123");
alert (password);
let message = (`Dear ${login}, your email is ${email}, your password is ${password}`);
alert(message);
//task 8
let hour = 60 * 60;
let day = hour * 24;
let month = day * 31;
alert (`${hour}, ${day}, ${month}`);