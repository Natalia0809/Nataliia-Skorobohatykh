// task 1
function isUpperCase(str) {
    if (str && str.length > 0 && str[0] === str[0].toUpperCase()) {
        console.log(`String '${str}' starts with an uppercase character.`);
    } else {
        console.log(`String '${str}' does not start with an uppercase character.`);
    }
}
isUpperCase('regexp');
isUpperCase('RegExp');

// task 2
function checkEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(email.trim());

    return isValidEmail;
}
console.log(checkEmail("Qmail2@gmail.com")); 
// task 3
const text = "cdbBdbsbz";
const regex = /d(b+)(d)?/gi;
const result = [];
let match;
while ((match = regex.exec(text)) !== null) {
  result.push(match[0]);
}
console.log(result);

// Additional 4 task
const text = "Java Script";
const regex = /(\w+)\s+(\w+)/;
const modifiedText = text.replace(regex, "$2, $1");

console.log(modifiedText);

// task 5
function validateCardNumber(cardNumber) {
    const cleanedCardNumber = cardNumber.replace(/-/g, '');
    const cardNumberPattern = /^\d{16}$/;
    return cardNumberPattern.test(cleanedCardNumber);
}

const cardNumber1 = '9999-9999-9999-9999';
const cardNumber2 = '1234-5678-9012-3456';
console.log(validateCardNumber(cardNumber1)); 
console.log(validateCardNumber(cardNumber2)); 

// task 6
function checkEmail(email) {
    const emailPattern = /^[A-Za-z0-9]+([._-][A-Za-z0-9]+)*@[A-Za-z0-9]+([.-][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
    if (emailPattern.test(email)) {
        console.log("Email is correct!");
    } else {
        console.log("Email is not correct!");
    }
}
checkEmail('my_mail@gmail.com');       
checkEmail('#my_mail@gmail.com');      
checkEmail('my_ma--il@gmail.com');   

// task 7
function checkLogin(inputString) {
    const loginPattern = /^[a-zA-Z][a-zA-Z0-9]*(?:\.\d+|\d+(?:\.\d+)?)?$/;
    const matches = inputString.match(/\d+(?:\.\d+)?/g) || [];
    if (loginPattern.test(inputString)) {
        console.log(true);
        console.log(matches);
    } else {
        console.log(false);
        console.log(matches);
    }
}
checkLogin('ee 1.1 ret 3');    
checkLogin('ee 1*1 ret 3');    
