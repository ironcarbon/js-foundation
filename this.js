//this

// * this is the object that the function is a property of

// obj.someFunction(this)   => this refers the object


function a() {
    console.log(this);
}
a()
// window object



// To avoid this structure
function b() {
    'use strict';
    console.log(this);
}
b()
// undefined


const obj = {
    name: 'Ipek',
    sayMyName: function () {
        return 'My name is ' + this.name
    },
    sayOneMore() {
        return this.sing() + '!'
    }
}
// 'this' is the object that function is property of
// Methods are functions that are inside of objects so the property methods can be accessed with dot notation.
// Whatever to the left of the dot which is the object that the function is a property of.
obj.sayMyName();


//2 main benefits of using 'this'
// 1. gives methods access to their object
// 2. execute same code for multiple objects

function greeting() {
    console.log(this.name + '!')
}
const name = 'Kevin';
const obj1 = {
    name: 'Kate',
    greeting: greeting
}
const obj2 = {
    name: 'Khloe',
    greeting: greeting
}

greeting()   // Kevin
obj1.greeting()  //Kate
obj2.greeting()  //Khloe