// console.log("09-js-class-object.js");

// let someObject = {
//     someProperty: 'some value'
// }

class Employee {

    eid;
    firstName;
    salary;

    getSalary = () => {
        return this.salary;
    }

}

let obj = new Employee();
obj.eid = 101;
obj.firstName = 'Sonu';
obj.salary = 10.5;
console.log(obj.getSalary());
console.log(obj.firstName);


class Product {
    pid;
    productName;
    price;
    constructor (pid, productName, price) {
        // assigmnet 
    }
}

let myProduct = new Product(1001, 'laptop', 10.5);




class Employee {

    eid;
    firstName;
    salary;

    getSalary = () => {
        return this.salary;
    }

}

let obj = new Employee();
obj.eid = 102;
obj.firstName = 'monu';
obj.salary = 11;
console.log(obj.getSalary());
console.log(obj.firstName);


class Product {
    pid;
    productName;
    price;
    constructor (pid, productName, price) {
        // assigmnet 
    }
}

let myProduct = new Product(1001, 'laptop', 11);
class shubham{

    age;
    helght;
    weight;
    job;
    money;

    moneypay =() =>{
        return this.money
    }
}
let his=new shubham();
his.age=24;
his.height=5.5;
his.weight=50;
his.job="capgemini";
his.money=3lpa;

console.log("shubham age is" + his.age);
console.log("shubham height is" + his.height);
console.log("shubham weight is" + his.weight);
console.log("shubham job is" + his.job);
console.log("shubham money is" + his.money);