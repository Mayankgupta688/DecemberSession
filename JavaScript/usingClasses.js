function Employee(name, age) {
    this.name = "";
    this.age = "";
    this.designation = "";
}

Employee.prototype.getData = function () {
    console.log(this.name)
}

var employeeOne = Employee("TechnoFunnel", 30);
var employeeTwo = new Employee("TechnoFunnel", 30);

console.log(employeeOne.name);
console.log(employeeOne.age);


class EmployeeClass {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
}

var employeeOneClass = new EmployeeClass("TechnoFunnel", 30);
var employeeTwoClass = new EmployeeClass("TechnoFunnel", 30);