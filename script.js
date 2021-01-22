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
 

 2 => Encapsulation ==> keep some properties and methods private inside the class, so they are not accessible from te outside class. Some methods can be exposed as s public intterface (API)

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


// accesser properties

// GETTERS and SETTERS

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