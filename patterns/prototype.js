// Example 1: Using Object.create
const Animal = {
  eat: function () {
    console.log(`${this.name} is eating.`);
  },
};

// Creating a new object with Animal as its prototype
const dog = Object.create(Animal);
dog.name = "Dog";
dog.eat(); // Dog is eating.

const cat = Object.create(Animal);
cat.name = "Cat";
cat.eat(); // Cat is eating.



// Example 2: Using a Constructor Function**
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person("Alice");
alice.greet(); // Hello, my name is Alice

const bob = new Person("Bob");
bob.greet(); // Hello, my name is Bob



//Example 3: Using Classes**
class Vehicle {
  constructor(type, speed) {
    this.type = type;
    this.speed = speed;
  }

  move() {
    console.log(`${this.type} is moving at ${this.speed} km/h.`);
  }
}

class Car extends Vehicle {
  constructor(speed, brand) {
    super("Car", speed); // Call the parent constructor
    this.brand = brand;
  }

  honk() {
    console.log(`${this.brand} is honking! Beep Beep!`);
  }
}

const tesla = new Car(120, "Tesla");
tesla.move(); // Car is moving at 120 km/h.
tesla.honk(); // Tesla is honking! Beep Beep!

const bmw = new Car(150, "BMW");
bmw.move(); // Car is moving at 150 km/h.
bmw.honk(); // BMW is honking! Beep Beep!