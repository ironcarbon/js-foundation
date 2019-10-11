let dragon = {
    name: 'Timucin',
    fire: true,
    fight() {
        return 5
    },
    sing() {
        return `I am ${this.name} and have a fire power`
    },
    singo() {
        if (this.fire) {
            return `I am ${this.name} and lalalalla`

        }
    }
}


let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}

lizard.__proto__ = dragon;

for (let prop in lizard) {
    console.log(prop)
}

for (let prop in lizard) {
    if (lizard.hasOwnProperty(prop)) {
        console.log(prop)
    }
}
//JS looks for prototype chain automatically, you don't need to use __proto__

// Scope chain and protoype chain is different than each other. They work in a similar fashion.

//Never use __proto__ because it is bad for performance. There is different ways to inherit when it comes to prototype.

// Never manually assign the prototype chain, it mess up up JS compiler.

// Why prototypal inheritance is useful?
// To write a more efficent code. Instead of adding required properties to all objects, js directly look for a prototype chain. DRY

//Whenever we get undefined on something, js goes up the prototype chain and can't find the property(undefined) or method(type error), we get errors.

//Null means nothing is there.
//Undefined is used we don't have that variable.

const obj = {}
obj.__proto__     //goes base object
obj.__proto__.__proto__    //null: nothing is there.