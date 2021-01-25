'use strict';

///////////////////////////////////////////////////////
///////// Object Oriented Programming(OOP) ///////////
/////////////////////////////////////////////////////

// OOP is a programming paradigm(style of code "how" we write and organize code) based in the concepts of the objects.
// In OOP objects are self-contained pieces/blocks of code
// Objects are building blocks of an application.

// ===== CLASSES AND INSTANCES (traditional OOP)
// classes are the blueprint from which we can create new objects

/* Class ex: 
user {
    user
    password
    email

    login(password){
        // login goes here
    }

    sendMessage(str){
        // msg goes here
    }
}

// Instances ex:

user {
        user = 'Ritesh'
        password = '1234'
        email = 'email@email.com'

        login(password){
            // login goes here
        }

        sendMessage(str){
            // msg goes here
        }
    }

 4 principles of OOP

 1 => Abstraction ==> ignore or hide the details that does not matter allowing us to get an overview perspective of the things we are implementing, instead of messing with the details.
 

 2 => Encapsulation ==> keep some properties and methods private inside the class, so they are not accessible from te outside class. Some methods can be exposed as public interface (API)

 3 => Inheritance ==> makes all properties and methods of a certain class available to a child class, forming a hierarchical relation btn classes.

 4 => Polymorphism ==> A child class can overwrite a method it inheritated from a parent class.
*/


/*
// Constructor functions;

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    // bad practice to use methods in a constructor function
    // this.calcAge = function() {
    //     console.log(1970 - this.birthYear);
    // }
}

const ritesh = new Person('Ritesh', 1995);
const roy = new Person('Roy', 1999);
const jon = new Person('jon', 1998);

console.log(ritesh);
console.log(roy);
console.log(jon);

// behind the scene
// 1. A new empty object is created
// 2. function is called, this = {}
// 3. {} linked to prototype that creates (.__proto__)
// 4. function automatically return {}


////////////////////////////////////////////////////////
//////// PROTOTYPES AND PROTOTYPAL INHERITANCE ////////
//////////////////////////////////////////////////////

// prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function() {
    console.log(this.birthYear - 1970);
}
ritesh.calcAge();

// setting properties in Prototypes
// Person.prototype.species = 'Homo Sapines';
// console.log(ritesh.species);

// console.log(ritesh.hasOwnProperty('firstName'));
// console.log(ritesh.hasOwnProperty('species'));
console.log(ritesh.__proto__.__proto__);
console.log(ritesh.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1,2,3,4,1,3,4,5,6,7,8]

console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function() {
   return [...new Set(this)];
}

console.log(arr.unique());
*/


////////////////////////////////////////////////////
///////////////////// CLASSES /////////////////////
//////////////////////////////////////////////////

/*

// class expression
// const Person = class {}

// class declaration
class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    //methods will be added to the .prototype property
    calcAge() {
        console.log(this.birthYear - 1970);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    static hey(){
        return this.firstName;
    }
}

const ritesh = new Person('Ritesh', 1995);
console.log(ritesh);
ritesh.calcAge();

// Person.prototype.greet = function(){
//     console.log(`Hey ${this.firstName}`);
// }

ritesh.greet();

// 1. Classes are NOT hoisted
// 2. Classes are also first-class citizens
// 3. Classes are executed in strict mode

*/

// accesser properties
// GETTERS and SETTERS

/*
const account = {
    owner: 'Ritesh',
    movements: [100, 200, 300, 120],

    get latestMovement(){
        return this.movements.slice(-1).pop();
    },

    set latestMovement(mov){
        return this.movements.push(mov);
    }
}

// getter
console.log(account.latestMovement);

// setter
account.latestMovement = 790;
console.log(account.latestMovement);



// static method => The static keyword defines a static method or property for a class. Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself.

Person.hey();


// object.create

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
};

const steve = Object.create(PersonProto);
console.log(steve);

steve.name = 'Steven';
steve.birthYear = 2002;
steve.calcAge();


const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function() {
    console.log(this.birthYear - 1970);
}


const Student = function(firstName, birthYear, course){
    Person.call(this, firstName, birthYear);
    this.course = course;
}

// Linking prototypes
// Student.prototype = Person.prototype;
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 1995, 'Computer Science');
mike.introduce();
mike.calcAge();
*/

class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    //methods will be added to the .prototype property
    calcAge() {
        console.log(this.birthYear - 1970);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    static hey(){
        return this.firstName;
    }
}

// inheritance betn classes and ES6 classes
/*
class Student extends Person {
    constructor(firstName, birthYear, course) {
        // Alwasys needs to happen first
        super(firstName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.firstName} and I study ${this.course}`);
    }

    calcAge() {
        console.log(`I'm ${2037-this.birthYear} years old but i feel like ${2037 - this.birthYear + 10}`)
    }
}

const martha = new Student('Martha Jones', 1995, 'Computer Science');
martha.introduce();
martha.calcAge();
*/

// Public fields
// Private fields
// Public methods
// Private methods


class Account {
    // 1 ==> public fields (instances)
    local = navigator.language;
    
    // 2 ==> private fields
    #movements = [];
    #pin;

    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        
        // protected property
        this.#pin = pin;
        // this.local = navigator.language;
        // this._movements = [];

        console.log(`Thanks for opening an account ${owner}`);
    }
    // 3 ==> Public Methods

    getMovements() {
        return this.#movements;
    }

    deposit(val){
        this.#movements.push(val);
        return this;
    }

    withdraw(val){
        this.deposit(-val);
        return this;
    }
    
    _approveLoan(val){
        return true;
        return this;
    }

    requestLoan(val){
        if(this._approveLoan(val)) {
            this.deposit(val);
            console.log(`loan approved`);
            return this;
        }
    }

    // 4 ==> Private Methods
    // #approveLoan(val){
    //     return true;
    // }
}

const acc1 = new Account('Ritesh', 'INR', 1111);
// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.deposit(350);
acc1.deposit(150);

console.log(acc1.getMovements());
// console.log(acc1.#movements);

acc1.withdraw(400);
acc1.withdraw(120);

acc1.requestLoan(1000);
console.log(acc1);

// chaining

acc1.deposit(670).deposit(980).withdraw(890);
console.log(acc1.getMovements());