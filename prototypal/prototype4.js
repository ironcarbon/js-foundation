
const array = []
array.__proto__.hasOwnProperty('map');  //true
array.__proto__   // points the father base array  === Array.prototype

//Proto points to the prototype up the chain.
// Proto property actually lives on the prototype.

const obj = { name: 'Sally' }
obj.hasOwnProperty('name')   //true
obj.hasOwnProperty('hasOwnProperty') //false
// obj itself does not have this as its own property. It has this as a property uo the prototype chain.

function a() { }
// All functions have call, apply, bind
a.hasOwnProperty('bind')  //false
a.hasOwnProperty('name')  //true  
// call, apply, bind are not as part of the property of a function.

/*
    Function is a special type of object. It is a callable object where we have code that can be invoked. We have an optional name field ans also have PROPERTIES that we can add to the function because it is an object.
    call, apply, bind are up in the prototype chain.
*/

function multipleBy5(num) {
    return num * 5
}
let main = multipleBy5.__proto__  //base function that all functions get created from.

main.apply, main.call, main.bind // and any other properties are accessible.

/*
multiplyBy5 have PROTO property that links up the function and this function has call,apply,bind.

PROTO links to PROTOTYPE.

Function()
Function also has property called PROTOTYPE that multiply5 proto links to. That's where call, apply, bind live.
Yellow arrow __proto__ actually lives inside of prototype object.

*/

multiplyBy5.__proto__  //base function
Function.__proto__   //base function


// Object has prototype with has own property and other functions. That prototype also includes PROTO as one of its properties that points to null.
Object.prototype   //gives base object
Object.prototype.__proto__   //null

// Proto is simply a reference or a pointer to up the chain prototype object.

const array = [];
array.hasOwnProperty('map')   //false
// Be efficient with memory. Map function only should live in one location in memory. Up the prototype chain with base array.

array.__proto__.hasOwnProperty('map')  //true
Array.prototype   //base array
array.__proto__   //base array
// array.__proto__ points to Array.prototype.