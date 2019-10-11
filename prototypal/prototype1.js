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

dragon.sing()

let lizard = {
    name: 'Kiki',
    fight() {
        return 1
    }
}
let singLizard = dragon.sing.bind(lizard)
singLizard()

// But to copy all the dragon properties

lizard.__proto__ = dragon;
lizard.fire
lizard.singo()
lizard.fight()
dragon.__proto__ // go to base object
dragon.isPrototypeOf(lizard)
  //Tell the js engine: run this method. It will look to dragon object. There is no such a method like this so it will go up the prototype chain to the base object that all objects are created in JS and look for a isPrototypeOf()

