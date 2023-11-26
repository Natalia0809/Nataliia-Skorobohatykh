// task 1
function propsCount(){
let user = {
    name: 'Natalia',
    age: 25,
    city: 'Lviv',
    country: 'Ukraine',
    yearofBirth: 1995
    };

return Object.keys(user).length;
}
console.log(propsCount());

// task 2
let myObject = {
    name: 'Daria',
    isAdult: true,
    age: 19,
    city: 'Lviv',
    hobbbies: 'painting'
};
function showProprs(obj){
    let propArray =[];
    let valueArray = [];

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      propArray.push(prop);

      valueArray.push(obj[prop]);
    }
  }
  console.log('Properties:', propArray);
  console.log('Values:', valueArray);
}
   showProprs(myObject);

// task 3
class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this.experience = 1.2; 
  }
  showSalary() {
    const salary = this.dayRate * this.workingDays;
    console.log(`${this.fullName} salary: ${salary}`);
  }

  showSalaryWithExperience() {
    const salary = this.dayRate * this.workingDays * this.experience;
    console.log(`${this.fullName} salary: ${salary}`);
  }
  get showExp() {
    return this.experience;
  }
  set setExp(value) {
    this.experience = value;
  }
  static sortBySalary(workers) {
    return workers.sort((a, b) => {
      const salaryA = a.dayRate * a.workingDays * a.experience;
      const salaryB = b.dayRate * b.workingDays * b.experience;
      return salaryA - salaryB;
    });
  }
}
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Thomson", 48, 22);
let worker3 = new Worker("Andy Ander", 29, 23);

const workers = [worker1, worker2, worker3];
const sortedWorkers = Worker.sortBySalary(workers);

console.log("\nSorted salary:");
sortedWorkers.forEach(worker => {
  const salary = worker.dayRate * worker.workingDays * worker.showExp;
  console.log(`${worker.fullName}: ${salary}`);
});

// task 5
class GeometricFigure {
  getArea() {
    return 0;
  }

  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}
class Triangle extends GeometricFigure {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  getArea() {
    return 0.5 * this.base * this.height;
  }
}
class Square extends GeometricFigure {
  constructor(side) {
    super();
    this.side = side;
  }
  getArea() {
    return this.side * this.side;
  }
}
class Circle extends GeometricFigure {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}
function handleFigures(figures) {
  const totalArea = figures.reduce((acc, figure) => {
    if (figure instanceof GeometricFigure) {
      const area = figure.getArea();
      console.log(`Geometric figure: ${figure.toString()} - area: ${area}`);
      return acc + area;
    }
    return acc;
  }, 0);

  console.log(totalArea);
}
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));