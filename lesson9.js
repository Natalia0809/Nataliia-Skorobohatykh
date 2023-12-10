// task 1
function getPromise(message, delay) {
  const customMessage = "test promise";
  const customDelay = 2000;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(message);
      }, delay);
    });
  }
getPromise("test promise", 2000).then(function (data) {
console.log(data);
});
// task 2
function calcArrProduct(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject("Error! Incorrect array!");
    } else {
      const isNumeric = arr.every((element) => typeof element === "number");

      if (isNumeric) {
        const product = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
        resolve(product);
      } else {
        reject("Error! Incorrect array!");
      }
    }
  });
}
calcArrProduct([3, 4, 5])
  .then((result) => console.log(result)) 
  .catch((error) => console.log(error));
calcArrProduct([5, "user2", 7, 12])
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); 
// task 3
const delay = (i, time) => new Promise((resolve) => setTimeout(() => resolve(i), time));
function showNumbers() {
  let sequence = Promise.resolve();
  for (let i = 0; i <= 9; i++) {
    sequence = sequence.then((value) => {
      console.log(value);
      return delay(i + 1, Math.floor(Math.random() * 3000));
    });
  }
  sequence.then((value) => console.log(value));
}
showNumbers();
// task 4
function delay(i, time) {
  return new Promise(resolve => setTimeout(() => resolve(i), time));
}
async function showNumbers() {
  for (let i = 0; i <= 9; i++) {
    const value = await delay(i, Math.floor(Math.random() * 3000));
    console.log(value);
  }
}
showNumbers();