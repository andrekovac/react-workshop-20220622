/* eslint-disable */

// Primitive data types

let variable01 = "Hello";

variable01 = 5;

const myNewVar = false;

{
  const myNewVar = true;
}

console.log(variable01);

let newVariable;

console.log(newVariable);

const newVariable2 = null;

// objects

const a = {};

const car = {
  brand: "Ford",
  model: "Mustang",
  year: 1969,
};

const myProperty = "model";
car["m" + "odel"] = "Not a mustang";

car["brand name"] = "Fiat";
car.recent = true;

car;

// arrays

// myArray[5] = "d";

// console.log(myArray[4]);

// destructuring

// const brand = car.brand;
// const model = car.model;

const { brand, model } = car;

const myArray = ["a", "b", "c"];
myArray[3] = "d";
myArray.myFirst = "hello";
// myArray.mySecond = 1;

// const { myFirst, mySecond } = myArray;
const [myFirst, mySecond, myThird, myFourth] = myArray;

myFirst;
mySecond;
myThird;
myFourth;

const myFourthAlternative = myArray[3];
myFourthAlternative;

console.log(myArray.myFirst);

// spread operator

const person = { name: "Andre", job: "developer" };

const person2 = { ...person, job: `my job: "engineer"` };
// const person3 = person;
person2;

// functions
const doSth = function (message) {
  console.log(message);
  return true;
};

// doSth();

const callOtherFunction = function (logFct) {
  return function (message) {
    logFct(message);
  };
};

const logSth = callOtherFunction(doSth);

logSth("das ist mein neuer String");

sayHello();

// arrow function expression

const add = function (a, b) {
  return a + b;
};

const add1 = (a, b) => {
  return a + b;
};

const add2 = (a, b) => a + b;

console.log(add2(3, 4));

// array methods

const myNumbers = [1, 2, 3, 4, 5];

const mySquareNumbers = myNumbers.map((num) => num * num);

mySquareNumbers;
myNumbers;

// equality checks

// -> primitive data types

const num1 = "      1";
const num2 = false;

// value (implicit type coercion)
console.log(num1 == num2);
// value + type
console.log(num1 === num2);

// -> complex data types

const obj1 = { name: "Andre" };
const obj2 = { name: "Andre" };

const obj3 = obj1;

console.log(obj1 == obj2);
console.log(obj1 === obj2);

// same reference
console.log(obj1 === obj3);

const result = "Hans";

if (result) {
  console.log("this is a sentence");
}

// logical operators

const isTrue = true && false;
console.log(isTrue);

const isAdmin = false;

function sayHello() {
  console.log("Hello");
}

// &&

// isAdmin && sayHello();

// ??

// ?.

const myObject = {
  other: null,
  someOther: undefined,
};

//

// const count = undefined;
// count != undefined

myObject.sayGoodbye?.();
myObject.sayGoodbye?.name;
console.log(myObject.sayGoodbye);

//

let myValue = 1;
let myNewValue = myValue;
myValue = 2;
myNewValue;

const myObject1 = { name: "Sonja" };
const myNewObject = myObject1;
const myNewObjectCopy = { ...myObject1 };

myObject1.name = "Alex";

myNewObject;
myNewObjectCopy;

const doSthAfterNSeconds = (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log("Hello");
        // throw new Error('this is wrong!')
        resolve("I am done!");
      } catch (error) {
        reject(error);
      }
    }, seconds * 1000);
  });
};

// Promise chain syntax
const myFct = () => {
  doSthAfterNSeconds(3)
    .then((resolvedValue) => {
      throw new Error("this is wrong!");
    })
    .catch((err) => console.log("Oh no! An error: ", err))
    .finally(() => console.log("The end"));
};

myFct();

// async/await function
const callMyDoSthFct = async () => {
  try {
    console.log("Just entered callMyDoSthFct");
    const resolvedValue = await doSthAfterNSeconds(3);
    console.log("Result: ", resolvedValue);
  } catch (error) {
    console.log("error");
  }
};

console.log("This is called synchronously 1");

callMyDoSthFct();

console.log("This is called synchronously 2");
