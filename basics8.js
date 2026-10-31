// Inheritance in class
import Person from "./basics7.js";
class Pet extends Person {
  constructor(firstName, lastName, petName) {
    super(firstName, lastName);
    this.petName = petName;
  }

  get location() {
    return "Los Angeles";
  }

  fullName() {
    return super.fullName() + " and my pet's name is " + this.petName;
  }
}

let petOwner = new Pet("John", "Doe", "Buddy");
console.log(petOwner.fullName());
console.log(petOwner.location);
