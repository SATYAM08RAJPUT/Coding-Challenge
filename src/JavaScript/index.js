console.log("Welcome to JavaScript");

// How can I reverse a Array;

const array1 = [10, 20, 30, 40, 50];
const totalLegth = array1.length;
const reverseArray = [];
console.log("Total Length:", totalLegth);
for (let i = array1.length - 1; i >= 0; i--) {
  console.log(array1[i]);
  reverseArray.push(array1[i]);
}
console.log(reverseArray);

for (let i = 1; i <= 10; i++) {
  console.log(i * 2);
}

// Remove duplicates from an array

const array2 = [10, 20, 30, 30, 10, 40, 50, 40, 60, 50];
const removeDublicate = [...new Set(array2)];
console.log("Remoe", removeDublicate);

// With the help of Function.

function removeDublicateValue(array) {
  return array.filter((value, index, self) => self.indexOf(value) === index);
}

const array3 = [1, 2, 2, 34, 5, 6, 2, 3, 4, 5, 6];
console.log(removeDublicateValue(array3));

// Reverse alphabets in array

const array4 = ["I", "am", "Satyam", "Rajput"];
for (let i = array4.length - 1; i >= 0; i--) {
  console.log(array4[i]);
}

const array5 = ["s", "a", "t", "y", "a", "m", "s"];
console.log(removeDublicateValue(array5));

// Date: 23/04/2025
console.log("23-04-2025");

const array6 = [100, 90, 23, 10, 52, 40, 30];

for (let i = array6.length - 1; i >= 0; i--) {
  console.log(array6[i]);
}

const array7 = ["s", "a", "t", "y", "a", "m"];

for (let i = array7.length - 1; i >= 0; i--) {
  console.log(array7[i]);
}

// Remove dublicate key Words & Dublicate Number

const array8 = [1, 2, 3, 45, 5, 6, 7, 8, 7, 1, 3];
console.log(...new Set(array8));

// for Function

function removeDublicateItems(array) {
  return array.filter((itm, index, self) => self.indexOf(itm) === index);
}

console.log(removeDublicateItems(array8));

// Flatten a nested array
console.log("Nested Array");
const array9 = [10, 20, 30, 40, 50, [(10, 20, [3, 4, 5, [100, 200]])]];
console.log(array9.flat(3));

// with the  help of coding:

function flattenDeep(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    []
  );
}
console.log("by Funtion Solve for nexted Array", flattenDeep(array9));

// Add array items:
const array10 = [10, 20];
console.log("is Array Value:", Array.isArray(array10));

function addsome(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}
console.log(addsome(array10));

// Date: 24/05/2025

console.log("Yesterday, Nexted Pratices");

const array11 = [10, 20, 30, 40, [1, 2, 5, [89, 77]]];
console.log(array11);
console.log(array11.flat(3));

function nextedPratices(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(nextedPratices(val)) : acc.concat(val),
    []
  );
}
console.log("Nexted array solve with Function Logic", nextedPratices(array11));

// for reverse string
const array12 = [100, 90, 80, 70, 60, 0, 40, 30, 20, 10];

for (let i = array12.length - 1; i >= 0; i--) {
  console.log("reverseArray", array12[i]);
}

const array13 = [51, 52, 63, 521, 52, 51, 60];
console.log("Remove Dublicate items:--", ...new Set(array13));

// Date 25-04-2025
console.log("25-04-2025");

const array14 = [10, 20, 30, 40, 50];
const array15 = [50, 10, 60, 78];

// concating if array

const array16 = array14.concat(array15);
console.log("concating", ...new Set(array16));

// Date -26/04/2025

console.log("Date:26/04/2025");
// join two array by Spread Operator:

const array17 = [11, 12, 13, 14, 15];
const array18 = [21, 22, 23, 24, 25, 26];

const array19 = [...array17, ...array18];
console.log("array Spread Opertor:-", array19);
console.log("array by concating:", array17.concat(array18));

// Concating Array:

function concatingArray(arr1, arr2) {
  let result = [];

  for (let item of arr1) {
    result.push(item);
  }

  for (let item of arr2) {
    result.push(item);
  }

  return result;
}

const a = [10, 20, 30];
const b = [40, 50, 60];
console.log("with the help of fucntion:-", concatingArray(a, b));

// concept for "🔥 for...of vs for...in 🔥"

const array20 = [0, 1, 2, 3, 4, 5];

for (let item of array20) {
  console.log("item", item);
}

const obj1 = { a: "1", b: "2" };

for (let key in obj1) {
  console.log("for in", key, obj1[key]);
}

// Date-28/04/2025
console.log("Date-28/04/2025");

// How can I reverse a string from a array

const array21 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

for (let i = array21.length; i >= 0; i--) {
  console.log("Reverse String Pre", i);
}

// How can I remove Dublicate array values:
// This is with the help of array method:
const array22 = [10, 20, 10, 30, 40, 50, 20];
console.log(...new Set(array22));

// now Can I make a fucntion to resolve it.

function removeItemDublicate(arr) {
  return arr.filter((item, index, self) => self.indexOf(item) === index);
}
console.log("By help of function", removeItemDublicate(array22));

// Working on Nested array:

const array23 = [10, 20, [20, 52, 1, [85, 74, 78, [52, 42]]]];

console.log(array23.flat(3));

function makeClearNexted(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(makeClearNexted(val)) : acc.concat(val),
    []
  );
}

console.log("by fuction", makeClearNexted(array23));

// Date: 29-04-2025
console.log("Date", "29/04/2025");

const array24 = [2010, 2020, 2030, 2040];

// By fucntion

for (let i = array24.length - 1; i >= 0; i--) {
  console.log("Reverse a string:- ", array24[i]);
}

// How can I Find a maximum &n Minimum

const array25 = [10, 20, 50, 74, 10];

function findMaxNumber(arr) {
  return {
    max: Math.max(...arr),
    min: Math.min(...arr),
  };
}
console.log("I am finding maximun Number:-", findMaxNumber(array25));

// Remove Dublicate Items from array;

const array26 = [10, 20, 10, 30, 40, 50, 40, 60];

console.log("Remove Dublicate Items", ...new Set(array26));

// remove by manual

function removeArrayItem(arr) {
  let result = [];
  for (let val of arr) {
    if (!result.includes(val)) result.push(val);
  }
  return result;
}

console.log("Remove itms from array by manual fun", removeArrayItem(array26));

// nexted array

const array27 = [10, 20, [30, 40, [50, 60, [70, 80, [90, 100]]]]];

console.log("flat array by method", array27.flat(5));

// by fuctions:-

function nextedItems(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(nextedItems(val)) : acc.concat(val),
    []
  );
}
console.log("by fuctions:-", nextedItems(array27));

// Remove Falsy Values from Array

const array28 = [10, 20, 0, false, undefined, ""];

function removFalsyValue(arr) {
  return arr.filter(Boolean);
}

console.log("remove falsy value", removFalsyValue(array28));

// Date: 30/04/2025
// Hoisting Topic
console.log("Hoisting Topic");

// Variable Hoisting & Fucntion Hoisting

console.log("Variable Hoiitng");
console.log("Hoisting Behavior :-", hoistingValue1);
var hoistingValue1 = 10;

// Function hoisting

greet();
function greet() {
  console.log("Function Hoisting");
}

// Second Example of fuction Hoisting

greet1();
function greet1() {
  console.log(a);
  var a = 10;
}

// next Questions
hoistingValue2 = 100;
console.log("check Valuing", hoistingValue2);
var hoistingValue2;

//shadowing with let & var

var hoistingValue3 = 10;
console.log(hoistingValue3);

// in fuctions

function run() {
  console.log(a);
  var a = 100;
  console.log("a value:-", a);
}
run();

console.log("Hoisting complete");

console.log("Date-02/05/2025");
const array29 = [10, 20, 30, 40, 50];

for (let i = array29.length; i <= 0; i--) {
  console.log(i);
}

// Date:10/05/2025
console.log("Date:-10/05/2025");

const array30 = [10, 20, 30, 40, 50];
let array30Store = [];
for (let i = array30.length - 1; i >= 0; i--) {
  console.log("Array 30 reverse String:-", array30[i]);
  array30Store.push(array30[i]);
  console.log("Store by a array:-", array30Store);
}

//  By a Method of Reverse String:-+

console.log(array30.reverse());

// How can I remove a dublicate array Items:

const array31 = [10, 20, 30, 20, 30, 50, 40, 10, 500];

console.log("remove Dublicate Array:-", ...new Set(array31));

// Date: -11/05/2025

console.log("Date: -", "11 / 05 / 2025");

// Write a Questions of ""Hello Satyam Rajput" Give me Reverse String

const array32 = "Hello Satyam Rajput";

const reverseString = array32.split("").reverse().join("");
console.log("ReverseString:-", reverseString);

//Find the Largest Number in an Array

const array33 = [100, 200, 300, 400, 500];

const findMaxNumbers = Math.max(...array33);
console.log("findMaxNumber", findMaxNumbers);

//Find the Lowerest Number in an Array

const array34 = [10, 20, 5, 0, 7, 8];
const minNumber = Math.min(...array34);
console.log("minNumber", minNumber);

// Count the Number of Vowels in a String

const array35 = ["a", "i", "b", "r", "o", "p", "s", "q"];
const VowelItenms = ["a", "e", "i", "o", " u"];
const colectVowels = [];

for (let char of array35) {
  if (VowelItenms.includes(char)) {
    colectVowels.push(char);
  }
}

console.log("Vowels found:", colectVowels);
console.log("Number of vowels:", colectVowels.length);

// Date: 12/05/2025
console.log("Date:-", "12/05/2025");

//  call(), apply(), and bind()
console.log("Concept of  call(), apply(), and bind()");

const person = {
  name: "alice",
  greet: function (greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
  },
};

const anotherName = { name: "Bob" };

person.greet.call(anotherName, "hi");
person.greet.apply(anotherName, ["Hello"]);

const docunBid = person.greet.bind(anotherName, "hiiii");
docunBid();

// Date: 16-05-2025
console.log("Date:-", "16-05-2025");

// How can I reverse String
const array36 = [10, 20, 30, 40, 50, 60];

for (let i = array36.length - 1; i >= 0; i--) {
  console.log(array36[i]);
}

// how Can I remove dubpicate values

const array37 = ["1", "20", "1", "2", "3", "6", "47", "8", "8", "0"];
const findValue = [...new Set(array37)];
console.log("findValue", findValue);

// Date: 17/05/2025
console.log("Date:-", "17/05/2025");

// Date: 25-05-2025

console.log("25/05/2025");

const array38 = [10, 20, 50, 60, 710, 80];

for (let i = array37.length - 1; i >= 0; i--) {
  console.log("Reversr string of array37:-", array38[i]);
}

// Remove dublicate array item

const array39 = [1, 2, 3, 3, 2, 1, 0];

const removeStringofarray39 = [...new Set(array39)];

console.log("Reverse String:-", removeStringofarray39);

//How do you check if a value is an array?

const array40 = [10, 50, 100, 500];
const checkNumber = array40.includes(5000);
console.log("check Number:-", checkNumber);

// Date : 29-05-2025
