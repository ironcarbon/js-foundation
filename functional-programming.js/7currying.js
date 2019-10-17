// Currying
// Currying is the technique of translating the evaluation of a function that takes multiple arguments.

// Simply, a function that can take multiple parameters and instead using currying modify it to a function that takes one parameter at a time.

// multiple parameters to ===>  a parameter

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(5)(3);
// Giving the function one parameter at a time

//Able to write utility functions with currying
const curriedMultiplyBy5 = curriedMultiply(5); curriedMultiplyBy5(4);
// curriedMultiplyBy5 will remember first piece of data which is 5 forever until we finish running the program. It only runs (b)=>a*b
//Trying to save memory

// Thanks to the closure, a is remembered by b function.


//Arity
//Number of arguments a function takes.
// In functional programming, it is not a solid rule but it is usually a good practice that fewer number of parameters in a function is easier to use that function.

// To make the funcitons more reusable in functional programming, use one or two parameters.