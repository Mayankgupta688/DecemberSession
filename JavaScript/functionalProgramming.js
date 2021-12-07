class Employee {
    name = "Mayank"
}

class Manager extends Employee {
    age = 10;
}

var data = new Manager()

console.log(data.name)
console.log(data.age)

// JavaScript is pure functional, class is syntactical sugar
// JavaScript Prototype Chaining