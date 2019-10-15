let human = {
    mortal: true
}

let ipek = Object.create(human)
ipek.age = 28
console.log(ipek.mortal) //true

// Object.create() creates a prototype chain up to human

console.log(human.isPrototypeOf(ipek)) //true