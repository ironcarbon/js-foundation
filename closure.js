// Closure
function a() {
    let grandpa = 'grandpa'
    return function b() {
        let father = 'father';
        return funtion c(){
            let son = 'son';
            return `${grandpa} > ${father} > ${son}`
        }
    }
}
a()()()

// How did son remember all people?
const one = a();  // it popped off the stack
// JS engine is going to keep any thing that's still being referenced by a child function.
// c function still needs grandpa and father so js engine keeps them. If there is any other variable being present which is not related to c function, garbage  collector cleans them all.

// Closures are also lexical scoping. Lexical means where it is written.

// Before we run any code, js engine knows which function has access to which variables because js is lexically scoped or statically scoped. JS create scope chains for closures.

//In Lexical Scope where the function is written matters not where we call the function

function boo(string) {
    return function (name) {
        return function (name2) {
            console.log(`${string} ${name} ${name2}`)
        }
    }
}

//2nd way to write down this function
const boo = string => name => name2 => console.log(`${string} ${name} ${name2}`)

boo('hi')('kevin')('kate')

const booGreeting = boo('hi')

const booGreetingName = booGreeting()

// *** Parameters are treated just like LOCAL VARIABLES that get stored in variable environments.

//Exercise

function callMeMaybe() {
    const callMe = 'Hi! I am now here!';
    setTimeout(function () {
        console.log(callMe);
    }, 4000);
}

callMeMaybe()


function callMeMaybe() {
    setTimeout(function () {
        console.log(callMe);
    }, 4000);
    const callMe = 'Hi! I am now here!';
}
callMeMaybe()
// it does not matter where we define this variable. It is not about hoisting. It is about closure. When setTimeout was sent to web api, varible will be in call stack and see variable reference could be necessary when setTimeout came back after call back queue. So, it will keep the variable information.


//Memory Efficient
//Encapsulation     ==> Hiding an information that is unnecessary