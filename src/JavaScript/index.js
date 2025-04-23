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
