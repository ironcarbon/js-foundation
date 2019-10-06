// In order to manipulate 'this' keyword, 3 methods is used

call()
// Underneath the hood in JS, when I do a bracket to invoke the function, when created have this property called CALL that allows to call the function
function a() {
    console.log('hello')
}
a()
a.call()
a.apply()

//do the same thing

// We can use call and apply for borrowing a method.
// Call takes paramater
// Apply takes array of parameters

const wizard = {
    name: 'Merlin',
    health: 100,
    heal() {
        return this.health = 100;
    }
}

const archer = {
    name: 'Robin',
    health: 30
}

// If I want to use other object's method in different object.

wizard.heal.call(archer);


//What happen if function gets an argument

const wizard = {
    name: 'Merlin',
    health: 100,
    heal(num1, num2) {
        return this.health += num1 + num2;
    }
}

const archer = {
    name: 'Robin',
    health: 30
}

wizard.heal().call(archer, 50, 30)
wizard.heal().apply(archer, [50, 30])

//  wizard function's method needs to require a this so it is dynamic so we can use call and apply.


// Unlike call and apply that immidiately runs a function, bind returns a new function with certain context and parameters

//  bind does not run the function, it returns a function.

const healArcher = wizard.heal().bind(archer, 50, 30)
healArcher()

//   bind allows us to store the 'this' keyword for later to use.
//   bind is like band-aid to fix the idea of dynamically scoped this keyword that ruins our entire lexical scoping discussion.


//example
const array = [1, 2, 3]

function getMaxNumber(arr) {
    return Math.max.apply(null, arr)
}

getMaxNumber(array)  //should return 3