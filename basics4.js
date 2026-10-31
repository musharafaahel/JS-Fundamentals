function add(a, b) {
  return a + b;
}
let sum = add(5, 10);
console.log(sum);

//Anonymous function
let sumOfIntegers = function (a, b) {
  return a + b;
};
console.log(sumOfIntegers(10, 20));

// Another way to define an anonymous function without using the function keyword is to use an arrow function
let sumOfIntegers2 = (a, b) => a + b;
console.log(sumOfIntegers2(20, 30));

//variable scope
var x = 10; // global scope
if (true) {
  var x = 203;
}
function testScope() {
  var x = 20; // local scope
  x++;
  console.log(x); // This will print 20 because x is defined in this scope
}
testScope();
console.log(x); // This will print 10 because x is defined in the global scope

// write a similar for let keyword
let y = 10; // global scope
if (true) {
  let y = 203;
}
function testScope2() {
  let y = 20; // local scope
  y++;
  console.log(y); // This will print 21 because y is defined in this scope
}
testScope2();
console.log(y); // This will print 10 because y is defined in the global scope
