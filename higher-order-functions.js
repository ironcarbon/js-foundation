// Why Higher Order Functions Are Useful..

// First way: 
function letKevinLogin() {
    let array = [];
    for (let i = 0; i < 1000; i++) {
        array.push(i)
    }
    return 'Access Granted to Kevin'
}
letKevinLogin()

function letKateLogin() {
    let array = [];
    for (let i = 0; i < 1000; i++) {
        array.push(i)
    }
    return 'Access Granted to Kate'
}
letKateLogin()

// DO NOT REPEAT YOURSELF
// NOT EASY TO READ


function letUserLogin(user) {
    let array = [];
    for (let i = 0; i < 1000; i++) {
        array.push(i)
    }
    return 'Access Granted to ' + user;
}

letUserLogin('Eva');


// Refactor the code
const giveAccessTo = (name) => 'Access Granted to ' + name
function letUserLogin(user) { //++we now tell What data to use when we call it.
    let array = [];
    for (let i = 0; i < 1000; i++) {
        array.push(i)
    }
    return giveAccessTo(user);
}
letUserLogin('Eva');  //Instead of defining Eva or any name inside of function, we can just define later on, when we actually INVOKE the function


//Higher Order Functions
// It is a function that returns a function or a function that accepts a function as parameter


function letAdminLogin(admin) {
    let array = [];
    for (let i = 1; i < 5000; i++) {
        array.push(i);
    }
    return giveAccessTo(admin);
}

// Try to do with HOF
const giveAccessTo = (name) => 'Access Granted to ' + name


function authecticate(verify) {
    let array = [];
    for (let i = 0; i < verify; i++) {
        array.push(i)
    }
    return giveAccessTo(person.name);
}
function sing(person) {
    return 'la la la ,y name is ' + person.name;
}

function letPerson(person, fnc) { // tell it what data to use + function
    if (person.level === 'admin') {
        return fnc(person)
    } else if (person.level === 'user') {
        return fnc(person)
    }
    return giveAccessTo(person.name)
}

letPerson({ level: 'admin', name: 'Sally' }, authenticate)


//example
const multiplyBy = function (num1, num2) {
    return num1 * num2
}

multiplyTwo
multiplyTen