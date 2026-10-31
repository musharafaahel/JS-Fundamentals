let marks = Array(5);
let totalCGPA = new Array(10, 20, 30, 40, 50);
let marks1 = [10, 20, 30, 40, 50];
console.log(marks);
console.log(totalCGPA);
console.log(marks1);

console.log(marks.length);
console.log(marks1[3]);
marks1[3] = 100;
console.log(marks1[3]);
marks1.push(60);
console.log(marks1);
marks1.pop();
console.log(marks1);
marks1.unshift(5);
console.log(marks1);
marks1.shift();
console.log(marks1);
console.log(marks1.indexOf(30));
console.log(marks1.includes(30));

console.log(marks1.slice(2, 4));

// To iterate over an array, we can use a for loop
for (let i = 0; i < marks1.length; i++) {
  console.log(marks1[i]);
}

// To sum all the elements of an array, we can use a for loop
let sum = 0;
for (let i = 0; i < marks1.length; i++) {
  sum += marks1[i];
}
console.log(sum);

// achieve the same using reduce method
console.log(marks1.reduce((sum, mark) => sum + mark, 0));

// to print even numbers from the array
let scores = [10, 15, 20, 25, 30, 35, 40];
let evenScores = [];
// using for loop
for (let i = 0; i < scores.length; i++) {
  if (scores[i] % 2 === 0) {
    console.log(scores[i]);
    evenScores.push(scores[i]);
  }
}
console.log(evenScores);

// using filter method
let evenScores2 = scores.filter((score) => score % 2 === 0);
console.log(evenScores2);

// map method to double the scores
let doubledScores = evenScores2.map((score) => score * 2);
console.log(doubledScores);
console.log(doubledScores.reduce((sum, score) => sum + score, 0));

let newScores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(
  newScores
    .filter((score) => score % 2 === 0)
    .map((score) => score * 2)
    .reduce((sum, score) => sum + score, 0),
);

let fruits = ["elderberry", "apple", "cherry", "banana", "date"];
// sorting an array of strings
console.log(fruits.sort());
let numbers = [10, 5, 20, 15, 30];
console.log(numbers.sort()); // this will not work as expected because it sorts the numbers as strings
// sorting an array of numbers
console.log(
  numbers.sort(function (a, b) {
    return a - b;
  }),
);

console.log(numbers.sort((a, b) => a - b));
console.log("Ascending order: " + fruits.sort());
console.log("Descending order: " + fruits.sort().reverse());
