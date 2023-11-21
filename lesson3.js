//task 1
let numbers = [2,3,4,5];
for (let i=0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
let i = 2;
while ( i <=5) {
    console.log(i);
    i++;
}
//task 2
for (let i = 0; i<= 15; i++) {
    if (i% 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}
// task 3
function randArray (k){
    let arr = [];
    for (let i=0; i<k; i++) {
        arr.push(Math.floor(Math.random()*500)+1)
    }
    return arr;
}
console.log(randArray(5));

// task 4
let a = parseInt(prompt ("Enter number a:  "));
let b = parseInt(prompt ("Enter number b:   "));
function raiseToDegree () {
 
    return Math.pow(a,b);
 }
console.log(raiseToDegree(a,b));

// task 5
function findMin() {
    if (arguments.length === 0) {
      return undefined; 
    }
    let min = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      if (arguments[i] < min) {
        min = arguments[i];
      }
    }
    return min;
  }
  console.log(findMin(12, 14, 4, -4, 0.2));
  
//task 6
function findUnique(arr) {
    for (let i =0; i< arr.length; i++){
        for (let j = i+1; j< arr.length; j++) {
            if (arr[i] === arr[j]){
                return false;
            }
        }
    }
    return true;
}
console.log(findUnique([1,2,3,5,3]));
console.log(findUnique([1,2,3,5,11]));

// task 7
function lastElem(arr, num = 1) {
    if (num >= arr.length) {
      return arr;
    }
    const result = arr.slice(-num);
    return num === 1 ? result[0] : result;
  }
  
  console.log(lastElem([3, 4, 10, -5])); // Output: -5
  console.log(lastElem([3, 4, 10, -5], 2)); // Output: [10, -5]
  console.log(lastElem([3, 4, 10, -5], 8)); // Output: [3, 4, 10, -5]

// task 8 
function capitalizeFirstLetter(string) {
    let words = string.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');    
}
console.log(capitalizeFirstLetter('i love java script'));
z