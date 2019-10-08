//The ways to invoke functions:
//1
function one{
    return 1
}
one()

//2: a method is a function inside of an object

const obj = {
    two: function () {
        return 2;
    }
}
obj.two()

const obj1 = {
    two() {
        return 2;
    }
}
obj1.two()   // Calling the function as a method

//3: call

function three() {
    return 3;
}
three.call()


//4: Function Constructor
const four = new Function('return 4')
four()
// Built-in JS object that comes with js language itself. It creates functions for us.

// We can also give parameters to built-in object Function

const five = new Function('num', 'return num')

five(5);

// Callable Object: Functions are Objects
function greeting() {
    console.log('hello');
}
greeting.user = 'Ipek'

//Functions also have PROPERTIES like objects.(call,apply,bind)

// const obj = {

// }
// obj.call() =======> DOES NOT WORK!
//Only functions have that features. Functions are CALLABLE OBJECTS!!!
// *** So, we can pass functions around like objects like things contain DATA.

// *** Functions do things for us, perform actions in our code. We can also store them as data, move them around.
