export default class Person {
  age = 25;
  get location() {
    return "New York";
  }
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

let person1 = new Person("John", "Doe");
console.log(person1.age);
console.log(person1.location);
console.log(person1.fullName());
