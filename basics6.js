import Person from "./basics7.js";

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.firstName);
console.log(person["lastName"]);
person.age = 30;
console.log(person.age);

console.log(person);
delete person.age;
console.log(person);
console.log("gender" in person);

for (let key in person) {
  console.log(key + ": " + person[key]);
}

console.log(person.fullName());

let importedPerson = new Person("Jane1", "Doe1");
console.log(importedPerson.fullName());
