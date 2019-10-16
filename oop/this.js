//THIS
//new binding this
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Ipek', 28)
person1;

//implicit binding
const person = {
    name: 'Sarah',
    age: 30,
    greeting() {
        console.log('hello' + this.name)
    }
}
//Inside of that object this keyword will refer to person


//explicit binding

const person3 = {
    name: 'Sarah',
    age: 40,
    greeting: function () {
        console.log('hi ' + this.setTimeout)
    }.bind(window)
}
person3.greeting()
//Explicit binding is using bind, call or apply to explicitly tell the program "this is what I want 'this' to be, I want to be window"

//arrow functions
// 'this' is dynamically scoped that it gets determined whenever it gets called. With arrow function, we can do lexically scoping that is wherever we write the function that's what 'this' binds to.

const person4 = {
    name: 'Sarah',
    age: 40,
    greeting: function () {
        var inner = () => {
            console.log('hi ' + this.name)
        }
        return inner()
    }
}
person4.greeting()