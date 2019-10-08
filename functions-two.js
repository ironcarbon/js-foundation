// Functions are first class citizens in JS
// 1: Functions can be assigned to variables and properties of objects
// We can assign the function to a variable or even an object property which then becomes a method.

var one = function () { console.log('hello world') }

// 2: We can also pass functions as arguments into a function.(pass a function as a parameter to a function)

function a(one) {
    one()
}

a(one())  // hello world

// 3: We can return functions as a values from other functions.

function b() {
    return function c() { console.log('bye') }
}
b()()  // bye

var d = b()
d()

// **** Functions are data not only perform actions!!