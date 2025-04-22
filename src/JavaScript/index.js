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
