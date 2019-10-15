//Only functions have the prototype property.
// Proto points to prototype object.
/*
Prototypes are a property on all functions.

* The only time we really use prototypes is using Constructor Functions.(usually start with capital letter,they contain the actual blueprint or prototype that we use)
*/

function multiplyBy5(num) {
    return num * 5;
}
multiplyBy5.__proto__. //f() native code
    Function.prototype //f() native code

multiplyBy5.__proto__.__proto__ //base object

Object.prototype  // base object

//Prototype properties only exist on functions.

multiplyBy5.__proto__.__proto__.__proto__  //null


typeof Object  //"function"
// Type of object is function because it has the prototype property.

//Standard built-in objects in js

//In order to perform an action in a program, we have to have a function. That's what the program does. It stores data and we use functions to manipulate that data.
const obj = {}
//Underneath the hood, JS has to create that object. In order to create that object, it uses object constructor.

typeof {} // "object" because this is an actual object that is created from the Object Constructor.

typeof Object  //function

//EVERY FUNCTION HAS A PROTOTYPE PROPERTY and it references to an object used to attach properties that will be inherited by objects further down the prototype chain.

//The last object in the chain is built-in Object.prototype

typeof Object.prototype
// "object"

//Object is a function because it has the prototype property.

//Object.prototype is BASE OBJECT. That is the very last object that we can look for properties on before we point to NULL.

const obj1 = {}
obj1.prototype //undefined

const array = []
array.prototype //undefined

'string'.prototype  //undefined  because it is a primary type

String.prototype  //yes it has also many methods from the string constructor

//Everything in JS is an OBJECT. Arrays and Functions in JS are OBJECTS. They inherit through the prototype chain from the base object.
// Only functions have the PROTOTYPE PROPERTY!
