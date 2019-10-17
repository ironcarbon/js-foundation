//Pure Functions
//There is two main things: 
//1. A function has to always return the same output given the same input
//2. The function can not modify anything outside of itself. No side effects. 

// no side effects
// input => output   (does not matter how many times we call it, it gives us same output)

const array = [1, 2, 3]
function a(arr) {
    arr.pop()
}
a(array);  //undefined because function does not return anything.
console.log(array)  //[1,2]  =>function has side effects because function modify anything outside of itself.


const array = [1, 2, 3]
function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop();
    return newArray;
}
console.log(removeLastItem(array))
// In this example, we don't modify anything outside of our scope world.


function multiplyBy2(arr) {
    return arr.map(item => item * 2)
} //no side effects
console.log(multiplyBy2(array));
console.log(array);



function a() {
    console.log('hi')
}
a()  // there is side effects because it writes 'hi' to browser.



//Referential Transparency: no matter what my input if they are the same, it's always going to give me the same output. 
function a(num1, num2) {
    return num1 + num2
}
a(1, 2)   //Instead of a(1,2), I can always write 3 and it never changes.
//This function is also no side effects because they are only touching their own parameters. These parameters are local variables.

// ** The idea with pure functions, it makes functions very easy to test, compose and avoids a lot of bugs because 
// no mutations, no shared state
// It creates predictable functions that minimize the bugs in the code. 

// ** Can't run piece of code without having a side effect of interacting with the browser. We can't have websites with just pure functions. Fetching, HTTP Request, DOM Manipulations so on are side effects. So, the goal of functional programming is not to make everything pure functions. The goal is to minimize side effects.

// Functional programming is just about making your code more predictable.
