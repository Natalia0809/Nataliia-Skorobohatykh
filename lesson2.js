// task 1
let x = 1;
let y = 2;

let res1 = 4*(x+y); // Add the code, it is necessary to use the variables x and y
console.log(res1); // "12"
console.log( typeof res1); // "string"

let res2 = `true`+ x*y; ; // Add code is required use variables x and y
console.log(res2); // "true2"
console.log( typeof res2); // "string"

let res3 = Boolean(x) // Add code is required use variables x and y
console.log(res3); // true
console.log( typeof res3); // " boolean "

let res4 = x+y;// Add code is required use variables x and y
console.log(parseFloat("res4")); // NaN
console.log( typeof res4); // "number"


//task 2
let m = prompt("Enter your number");
if(m>0) {
    console.log ("Number " + m + "  positive");
}else if (m%7==0) {
    console.log ("Number" + m + "is multiple of 7");
} else {
    ("Number" + m + "is negative and not multiple of 7");
};

//task 3
const numbers = new Array();
numbers[0]="12";
numbers[1]="two-three";
numbers[2]= 12 > null;
numbers[3] = null;
alert(numbers.length);
numbers[4] = prompt (`Enter your number`);
alert(numbers[4]);
numbers.shift();
alert(numbers);

//task 4
const cities = ["Rome", "Lviv", "Warszaw"];
let new_cities = cities.join('*');
console.log(new_cities);

//task 5
let isAdult = prompt ("Enter you age");
if  (isAdult >= 18) {
    alert("You have reached the age of majority");
}       
else {
    (isAdult < 18);
    alert ("You are still to young");
}

// task 6
//a)
const a = prompt(`Enter length a of triangle: `);
const b = prompt(`Enter length b of triangle: `);
const c = prompt(`Enter length c of triangle: `);
const s = (a+b+c)/2;
const area =(Math.sqrt(s*(s-a)*(s-b)*(s-c))).toFixed(3);
console.log(`Area of triangle is ${area}`);

//b)
//Checking Pythagorean theorem
if (Math.sqrt(a) + Math.sqrt(b)== Math.sqrt(c)||
Math.sqrt(b)+ Math.sqrt(c)==Math.sqrt(a)||
Math.sqrt(a)+Math.sqrt(c)==Math.sqrt(b)) {
    console.log (`Trianle is rectangular `);
} else {
    console.log(`Triangle is not rectaunglar`);
    alert(`Incorrect data`);
}


// task 7
const dateToday = new Date();
const timeNow= dateToday.getHours();

if (timeNow<5 && timeNow >=23){
    alert("Good night");
} else if (timeNow>=5 &&timeNow<=11){
    alert("Good morning");
} else if (timeNow>=11 && timeNow<=17){
    alert("Good day");
} else if (timeNow>=17 && timeNow<=23){
    alert("Good evening");
}

switch (true){
    case (timeNow<5 || timeNow>=23):
        alert("Good night");
        break;
    case (timeNow>=5 &&timeNow<=11):
        alert("Good morning");
        break;
    case (timeNow>=11 && timeNow<=17):
        alert("Good day");
        break;
    case (timeNow>=17 && timeNow<=23):
        alert("Good evening");
        break;
}