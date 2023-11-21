//task 1
function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number' || isNaN(width) || isNaN(height)) {
      throw new Error('Width and height must be numeric values.');
    }
    const area = width * height;
    return area;
  }
  try {
    const width = 5;
    const height = 'cde';
    const area = calcRectangleArea(width, height);
    console.log('Rectangle Area:', area);
  } catch (error) {
    console.error('Error:', error.message);
  }
// task 2
function checkAge(){
let age = prompt("How old are you?");
if (!age) {
   throw new Error ('The filed is empty! Please enter your age.');
}
else if (isNaN(age)) {
    throw new Error('The filed is not a number. Please enter your age.')
}
else if  (age<14) {
    throw new Error ('Your are too young! You must be 14 years old to watch the movie.')
}    
else
 {alert('The age verifications have been completed. You can watch the movie');
}
}
checkAge();

// task 3 
class MonthException {
  constructor(message) {
    this.name = 'MonthException';
    this.message = message;
  }
}
function showMonthName(month) {
  const monthNames = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  if (month >= 1 && month <= 12) {
    return monthNames[month - 1];
  } else {
    throw new MonthException('Incorrect month number');
  }
}
try {
  console.log(showMonthName(5)); 
  console.log(showMonthName(14)); 
} catch (error) {
  if (error instanceof MonthException) {
    console.log(`${error.name} ${error.message}`);
 }
}
  // task 4
  function showUser(id) {
    if (id < 0) {
      throw new Error('ID must not be negative: ' + id);
    } 
    return { id };
  }
  function showUsers(ids) {
    const result = [];
    for (const id of ids) {
      try {
        result.push(showUser(id));
      } catch (error) {
        console.error(error.message);
      }
    }  
    return result;
  }
  const users = showUsers([7, -12, 44, 22]);
  console.log(users);
  
