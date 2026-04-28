// const fruits = new Set();

// fruits.add("apple");
// fruits.add("banana");
// fruits.add("apple"); // duplicate

// console.log(fruits);


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let p1 = new Person("Dudu", 20);
let p2 = new Person("Thona", 21);
p1.greeting();
p2.greeting();